import type { NextPage, GetStaticProps } from 'next';
import PQueue from 'p-queue';

type HomeProps = {
  drafts: { [key: string]: any };
};

const Home: NextPage<HomeProps> = ({ drafts }) => {
  return (
    <div className="min-h-screen p-8">
      <div className="grid grid-cols-3 gap-4">
        {Reflect.ownKeys(drafts).map((key) => {
          return (
            <div key={String(key)} className="border border-gray-300 rounded p-4">
              <h1>{drafts[String(key)].name}</h1>
              <p>{drafts[String(key)].craftType}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = 'https://xivapi.com';

  // initialize queue
  const xivapiQueue = new PQueue({ 
    concurrency: 10,
    interval: 1000,
    intervalCap: 10 
  });
  
  xivapiQueue.on('completed', (result) => {
    console.log(`Completed with a status of: ${result.status}`);
  });

  // get draft urls
  const urlsRes = await xivapiQueue.add(() => fetch(`${baseUrl}/CompanyCraftDraft`));
  const urlsJson = await urlsRes.json();
  const urls = urlsJson['Results'].map((result: any) => result["Url"]);

  // get each draft
  const responses = await Promise.all(urls.map((url: string) => {
    return xivapiQueue.add(() => fetch(`${baseUrl}${url}`))
  }));

  const results = await Promise.all(responses.map((r) => r.json()));

  // transform data
  const drafts = results.reduce((prev, current) => {
    const key = `${current['ID']}`;
    const value = {
      id: current['ID'],
      name: current['Name'],
      craftType: current['CompanyCraftDraftCategoryTargetID'],
      requiredItems: {
        '0': {
          id: current['RequiredItem0TargetID'] ?? null,
          name: current['RequiredItem0']?.['Name'] ?? null,
          description: current['RequiredItem0']?.['Description'] ?? null,
          count: current['RequiredItemCount0'] ?? null,
        },
        '1': {
          id: current['RequiredItem1TargetID'] ?? null,
          name: current['RequiredItem1']?.['Name'] ?? null,
          description: current['RequiredItem1']?.['Description'] ?? null,
          count: current['RequiredItemCount1'] ?? null,
        },
        '2': {
          id: current['RequiredItem2TargetID'] ?? null,
          name: current['RequiredItem2']?.['Name'] ?? null,
          description: current['RequiredItem2']?.['Description'] ?? null,
          count: current['RequiredItemCount2'] ?? null,
        }
      }
    };

    return { ...prev, [key]: value };
  }, {});

  return { 
    props: {
      drafts
    }
  };
}

export default Home;
