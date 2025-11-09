import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:3100/graphql',
	documents: ['src/lib/graphql/**/*.gql.{ts,tsx}'],
	generates: {
		'src/lib/graphql/generated.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typed-document-node',
				'typescript-validation-schema'
			],
			config: {
				schema: 'zod',
				zodImportPath: 'zod/v3',
				scalars: {
					Time: 'string',
					Upload: 'File'
				},
				scalarSchemas: {
					Time: 'z.string()',
					Upload: 'z.instanceof(File)'
				}
			}
		},
		'src/lib/graphql/graphql.schema.json': {
			plugins: ['introspection']
		}
	}
};

export default config;
