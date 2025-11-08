import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { z } from 'zod/v3';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	Map: { input: any; output: any };
	Time: { input: string; output: string };
	Upload: { input: File; output: File };
};

export type Created = {
	__typename?: 'Created';
	date: Date;
	timestamp: Scalars['Int']['output'];
};

export type Date = {
	__typename?: 'Date';
	day: Scalars['Int']['output'];
	month: Scalars['Int']['output'];
	year: Scalars['Int']['output'];
};

export type Day = {
	__typename?: 'Day';
	averageRate: Scalars['Float']['output'];
	date: Date;
	id?: Maybe<Scalars['Int']['output']>;
	rx: Scalars['Float']['output'];
	time?: Maybe<TimeData>;
	timestamp?: Maybe<Scalars['Int']['output']>;
	tx: Scalars['Float']['output'];
};

export type EstimatedTraffic = {
	__typename?: 'EstimatedTraffic';
	rx: Scalars['Float']['output'];
	total: Scalars['Float']['output'];
	tx: Scalars['Float']['output'];
};

export type FiveMinute = {
	__typename?: 'FiveMinute';
	date: Date;
	id: Scalars['Int']['output'];
	rx: Scalars['Float']['output'];
	time: TimeData;
	timestamp: Scalars['Int']['output'];
	tx: Scalars['Float']['output'];
};

export type Interface = {
	__typename?: 'Interface';
	alias?: Maybe<Scalars['String']['output']>;
	created: Created;
	name: Scalars['String']['output'];
	traffic: Traffic;
	updated: Updated;
};

export type InterfaceResult = {
	__typename?: 'InterfaceResult';
	average: EstimatedTraffic;
	monthly: EstimatedTraffic;
	name: Scalars['String']['output'];
	total: Total;
	traffics: Array<Day>;
};

export type Mutation = {
	__typename?: 'Mutation';
	ping: Scalars['String']['output'];
};

export enum Period {
	Day = 'DAY',
	Hour = 'HOUR',
	Month = 'MONTH',
	Year = 'YEAR'
}

export type Query = {
	__typename?: 'Query';
	ping: Scalars['String']['output'];
	vnstat: VnstatResult;
};

export type QueryVnstatArgs = {
	input: VnstatInput;
};

export type Subscription = {
	__typename?: 'Subscription';
	vnstat: VnstatStreamResult;
};

export type SubscriptionVnstatArgs = {
	input: VnstatStreamInput;
};

export type TimeData = {
	__typename?: 'TimeData';
	hour: Scalars['Int']['output'];
	minute: Scalars['Int']['output'];
};

export type Total = {
	__typename?: 'Total';
	rx: Scalars['Float']['output'];
	tx: Scalars['Float']['output'];
};

export type Traffic = {
	__typename?: 'Traffic';
	day: Array<Day>;
	fiveMinute: Array<FiveMinute>;
	hour: Array<Day>;
	month: Array<Day>;
	top: Array<Day>;
	total: Total;
	year: Array<Day>;
};

export type Updated = {
	__typename?: 'Updated';
	date: Date;
	time: TimeData;
	timestamp: Scalars['Int']['output'];
};

export type Vnstat = {
	__typename?: 'Vnstat';
	interfaces: Array<Interface>;
	jsonversion: Scalars['String']['output'];
	vnstatversion: Scalars['String']['output'];
};

export type VnstatInput = {
	interfaceNames?: InputMaybe<Array<Scalars['String']['input']>>;
	period: Period;
};

export type VnstatResult = {
	__typename?: 'VnstatResult';
	estimated: EstimatedTraffic;
	interfaceNames: Array<Scalars['String']['output']>;
	interfaces: Array<InterfaceResult>;
	jsonversion: Scalars['String']['output'];
	total: Total;
	vnstatversion: Scalars['String']['output'];
};

export type VnstatStreamInput = {
	interfaceNames?: InputMaybe<Array<Scalars['String']['input']>>;
	interval?: InputMaybe<Scalars['Int']['input']>;
	period: Period;
};

export type VnstatStreamResult = {
	__typename?: 'VnstatStreamResult';
	data?: Maybe<VnstatResult>;
	message?: Maybe<Scalars['String']['output']>;
};

export type VnstatDataFragment = {
	__typename?: 'VnstatResult';
	vnstatversion: string;
	jsonversion: string;
	total: { __typename?: 'Total'; rx: number; tx: number };
	estimated: { __typename?: 'EstimatedTraffic'; rx: number; tx: number; total: number };
	interfaces: Array<{
		__typename?: 'InterfaceResult';
		name: string;
		total: { __typename?: 'Total'; rx: number; tx: number };
		average: { __typename?: 'EstimatedTraffic'; rx: number; tx: number; total: number };
		monthly: { __typename?: 'EstimatedTraffic'; rx: number; tx: number; total: number };
		traffics: Array<{
			__typename?: 'Day';
			timestamp?: number | null;
			rx: number;
			tx: number;
			averageRate: number;
			date: { __typename?: 'Date'; day: number; month: number; year: number };
			time?: { __typename?: 'TimeData'; hour: number; minute: number } | null;
		}>;
	}>;
};

export type VnstatGetQueryVariables = Exact<{
	input: VnstatInput;
}>;

export type VnstatGetQuery = {
	__typename?: 'Query';
	vnstat: {
		__typename?: 'VnstatResult';
		vnstatversion: string;
		jsonversion: string;
		total: { __typename?: 'Total'; rx: number; tx: number };
		estimated: { __typename?: 'EstimatedTraffic'; rx: number; tx: number; total: number };
		interfaces: Array<{
			__typename?: 'InterfaceResult';
			name: string;
			total: { __typename?: 'Total'; rx: number; tx: number };
			average: { __typename?: 'EstimatedTraffic'; rx: number; tx: number; total: number };
			monthly: { __typename?: 'EstimatedTraffic'; rx: number; tx: number; total: number };
			traffics: Array<{
				__typename?: 'Day';
				timestamp?: number | null;
				rx: number;
				tx: number;
				averageRate: number;
				date: { __typename?: 'Date'; day: number; month: number; year: number };
				time?: { __typename?: 'TimeData'; hour: number; minute: number } | null;
			}>;
		}>;
	};
};

export type VnstatStreamSubscriptionVariables = Exact<{
	input: VnstatStreamInput;
}>;

export type VnstatStreamSubscription = {
	__typename?: 'Subscription';
	vnstat: {
		__typename?: 'VnstatStreamResult';
		message?: string | null;
		data?: {
			__typename?: 'VnstatResult';
			vnstatversion: string;
			jsonversion: string;
			total: { __typename?: 'Total'; rx: number; tx: number };
			estimated: { __typename?: 'EstimatedTraffic'; rx: number; tx: number; total: number };
			interfaces: Array<{
				__typename?: 'InterfaceResult';
				name: string;
				total: { __typename?: 'Total'; rx: number; tx: number };
				average: { __typename?: 'EstimatedTraffic'; rx: number; tx: number; total: number };
				monthly: { __typename?: 'EstimatedTraffic'; rx: number; tx: number; total: number };
				traffics: Array<{
					__typename?: 'Day';
					timestamp?: number | null;
					rx: number;
					tx: number;
					averageRate: number;
					date: { __typename?: 'Date'; day: number; month: number; year: number };
					time?: { __typename?: 'TimeData'; hour: number; minute: number } | null;
				}>;
			}>;
		} | null;
	};
};

export const VnstatDataFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'VnstatData' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'VnstatResult' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'vnstatversion' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'jsonversion' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'total' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tx' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'estimated' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'interfaces' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'total' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'average' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'monthly' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'traffics' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'date' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'day' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'month' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'year' } }
													]
												}
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'time' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'hour' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'minute' } }
													]
												}
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'averageRate' } }
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<VnstatDataFragment, unknown>;
export const VnstatGetDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'VnstatGet' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'VnstatInput' } }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'vnstat' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'VnstatData' } }]
						}
					}
				]
			}
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'VnstatData' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'VnstatResult' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'vnstatversion' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'jsonversion' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'total' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tx' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'estimated' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'interfaces' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'total' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'average' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'monthly' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'traffics' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'date' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'day' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'month' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'year' } }
													]
												}
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'time' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'hour' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'minute' } }
													]
												}
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'averageRate' } }
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<VnstatGetQuery, VnstatGetQueryVariables>;
export const VnstatStreamDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'subscription',
			name: { kind: 'Name', value: 'VnstatStream' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'VnstatStreamInput' } }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'vnstat' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'data' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'VnstatData' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'message' } }
							]
						}
					}
				]
			}
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'VnstatData' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'VnstatResult' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'vnstatversion' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'jsonversion' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'total' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tx' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'estimated' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'interfaces' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'total' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'average' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'monthly' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'traffics' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'date' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'day' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'month' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'year' } }
													]
												}
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'time' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'hour' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'minute' } }
													]
												}
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'rx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'tx' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'averageRate' } }
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<VnstatStreamSubscription, VnstatStreamSubscriptionVariables>;

type Properties<T> = Required<{
	[K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny =>
	v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export const PeriodSchema = z.nativeEnum(Period);

export function VnstatInputSchema(): z.ZodObject<Properties<VnstatInput>> {
	return z.object({
		interfaceNames: z.array(z.string()).nullish(),
		period: PeriodSchema
	});
}

export function VnstatStreamInputSchema(): z.ZodObject<Properties<VnstatStreamInput>> {
	return z.object({
		interfaceNames: z.array(z.string()).nullish(),
		interval: z.number().nullish(),
		period: PeriodSchema
	});
}
