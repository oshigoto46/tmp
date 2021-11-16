import { Client, estypes } from '@elastic/elasticsearch';
import type { Client as NewTypes } from '@elastic/elasticsearch/api/new';
// @ts-expect-error @elastic/elasticsearch
const client: NewTypes = new Client({
  node: 'http://localhost:9200',
});

interface Source {
  foo: string;
}

const request: estypes.IndexRequest<Source> = {
  index: 'test',
  body: { foo: 'bar' },
};

export const index = async (): Promise<any> => await client.index(request);
