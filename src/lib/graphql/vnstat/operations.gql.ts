import { gql } from '@urql/svelte';

export const VNSTAT_DATA_FRAGMENT = gql`
	fragment VnstatData on VnstatResult {
		vnstatversion
		jsonversion
		total {
			rx
			tx
		}
		estimated {
			rx
			tx
			total
		}
		interfaces {
			name
			total {
				rx
				tx
			}
			average {
				rx
				tx
				total
			}
			monthly {
				rx
				tx
				total
			}
			traffics {
				date {
					day
					month
					year
				}
				time {
					hour
					minute
				}
				timestamp
				rx
				tx
				averageRate
			}
		}
	}
`;

export const VNSTAT_GET = gql`
	${VNSTAT_DATA_FRAGMENT}

	query VnstatGet($input: VnstatInput!) {
		vnstat(input: $input) {
			...VnstatData
		}
	}
`;

export const VNSTAT_STREAM = gql`
	${VNSTAT_DATA_FRAGMENT}

	subscription VnstatStream($input: VnstatStreamInput!) {
		vnstat(input: $input) {
			data {
				...VnstatData
			}
			message
		}
	}
`;
