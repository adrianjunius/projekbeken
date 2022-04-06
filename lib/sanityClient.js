import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'kpufn3dv',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skswuw8mlX9F6zVH1vDdhEUYdV0aahgs15awuNhLsnUtb5Qqm74oiHvMBVHe8ePrmtYTZOF7kktw9IZNGZ3UJ7C3CM2OvyIsTc453G7KL01bf0fp5uefOW1MJ80lJY8TGPp3stQAeeJyS5YiDlhjipzrAUAXHJ5SGdQ3dBNCV1XgjHuVewpk',
  useCdn: false,
})
