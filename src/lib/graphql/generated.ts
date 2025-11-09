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

export type CoreInfo = {
	__typename?: 'CoreInfo';
	logical?: Maybe<Scalars['Int']['output']>;
	online?: Maybe<Scalars['Int']['output']>;
	physical?: Maybe<Scalars['Int']['output']>;
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

export type Dedicated = {
	__typename?: 'Dedicated';
	total?: Maybe<Scalars['Int']['output']>;
	used?: Maybe<Scalars['Int']['output']>;
};

export type DefaultRoute = {
	__typename?: 'DefaultRoute';
	ipv4?: Maybe<Scalars['Boolean']['output']>;
};

export type DiskFiles = {
	__typename?: 'DiskFiles';
	total?: Maybe<Scalars['Int']['output']>;
	used?: Maybe<Scalars['Int']['output']>;
};

export type EstimatedTraffic = {
	__typename?: 'EstimatedTraffic';
	rx: Scalars['Float']['output'];
	total: Scalars['Float']['output'];
	tx: Scalars['Float']['output'];
};

export type Fallback = {
	__typename?: 'Fallback';
	name?: Maybe<Scalars['String']['output']>;
	pretty?: Maybe<Scalars['String']['output']>;
	size?: Maybe<Scalars['String']['output']>;
	styles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FastfetchBattery = {
	__typename?: 'FastfetchBattery';
	capacity?: Maybe<Scalars['Float']['output']>;
	cycleCount?: Maybe<Scalars['Int']['output']>;
	manufactureDate?: Maybe<Scalars['String']['output']>;
	manufacturer?: Maybe<Scalars['String']['output']>;
	modelName?: Maybe<Scalars['String']['output']>;
	serial?: Maybe<Scalars['String']['output']>;
	status?: Maybe<Scalars['String']['output']>;
	technology?: Maybe<Scalars['String']['output']>;
	temperature?: Maybe<Scalars['Float']['output']>;
	timeRemaining?: Maybe<Scalars['Int']['output']>;
};

export type FastfetchCpu = {
	__typename?: 'FastfetchCPU';
	coreTypes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
	cores?: Maybe<CoreInfo>;
	cpu?: Maybe<Scalars['String']['output']>;
	frequency?: Maybe<Frequency>;
	march?: Maybe<Scalars['String']['output']>;
	packages?: Maybe<Scalars['Int']['output']>;
	temperature?: Maybe<Scalars['Float']['output']>;
	vendor?: Maybe<Scalars['String']['output']>;
};

export type FastfetchCursor = {
	__typename?: 'FastfetchCursor';
	size?: Maybe<Scalars['String']['output']>;
	theme?: Maybe<Scalars['String']['output']>;
};

export type FastfetchDe = {
	__typename?: 'FastfetchDE';
	prettyName?: Maybe<Scalars['String']['output']>;
	processName?: Maybe<Scalars['String']['output']>;
	version?: Maybe<Scalars['String']['output']>;
};

export type FastfetchDisk = {
	__typename?: 'FastfetchDisk';
	bytes?: Maybe<Usage>;
	createTime?: Maybe<Scalars['Time']['output']>;
	files?: Maybe<DiskFiles>;
	filesystem?: Maybe<Scalars['String']['output']>;
	mountFrom?: Maybe<Scalars['String']['output']>;
	mountpoint?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	volumeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FastfetchDisplay = {
	__typename?: 'FastfetchDisplay';
	bitDepth?: Maybe<Scalars['Int']['output']>;
	hdrStatus?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	manufactureDate?: Maybe<ManufactureDate>;
	name?: Maybe<Scalars['String']['output']>;
	output?: Maybe<Resolution>;
	physical?: Maybe<Size>;
	platformApi?: Maybe<Scalars['String']['output']>;
	preferred?: Maybe<Resolution>;
	primary?: Maybe<Scalars['Boolean']['output']>;
	rotation?: Maybe<Scalars['Int']['output']>;
	scaled?: Maybe<Resolution>;
	serial?: Maybe<Scalars['Int']['output']>;
	type?: Maybe<Scalars['String']['output']>;
};

export type FastfetchFont = {
	__typename?: 'FastfetchFont';
	display?: Maybe<Scalars['String']['output']>;
	fonts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FastfetchGpu = {
	__typename?: 'FastfetchGPU';
	coreCount?: Maybe<Scalars['Int']['output']>;
	coreUsage?: Maybe<Scalars['Float']['output']>;
	deviceId?: Maybe<Scalars['Int']['output']>;
	driver?: Maybe<Scalars['String']['output']>;
	frequency?: Maybe<Scalars['Int']['output']>;
	index?: Maybe<Scalars['Int']['output']>;
	memory?: Maybe<GpuMemory>;
	name?: Maybe<Scalars['String']['output']>;
	platformApi?: Maybe<Scalars['String']['output']>;
	temperature?: Maybe<Scalars['Float']['output']>;
	type?: Maybe<Scalars['String']['output']>;
	vendor?: Maybe<Scalars['String']['output']>;
};

export type FastfetchHost = {
	__typename?: 'FastfetchHost';
	family?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	serial?: Maybe<Scalars['String']['output']>;
	sku?: Maybe<Scalars['String']['output']>;
	uuid?: Maybe<Scalars['String']['output']>;
	vendor?: Maybe<Scalars['String']['output']>;
	version?: Maybe<Scalars['String']['output']>;
};

export type FastfetchKernel = {
	__typename?: 'FastfetchKernel';
	architecture?: Maybe<Scalars['String']['output']>;
	displayVersion?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	pageSize?: Maybe<Scalars['Int']['output']>;
	release?: Maybe<Scalars['String']['output']>;
	version?: Maybe<Scalars['String']['output']>;
};

export type FastfetchLocalIp = {
	__typename?: 'FastfetchLocalIP';
	defaultRoute?: Maybe<DefaultRoute>;
	ipv4?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
};

export type FastfetchMemory = {
	__typename?: 'FastfetchMemory';
	total?: Maybe<Scalars['Int']['output']>;
	used?: Maybe<Scalars['Int']['output']>;
};

export type FastfetchOs = {
	__typename?: 'FastfetchOS';
	buildID?: Maybe<Scalars['String']['output']>;
	codename?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['String']['output']>;
	idLike?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	prettyName?: Maybe<Scalars['String']['output']>;
	variant?: Maybe<Scalars['String']['output']>;
	variantID?: Maybe<Scalars['String']['output']>;
	version?: Maybe<Scalars['String']['output']>;
	versionID?: Maybe<Scalars['String']['output']>;
};

export type FastfetchPackages = {
	__typename?: 'FastfetchPackages';
	all?: Maybe<Scalars['Int']['output']>;
	amSystem?: Maybe<Scalars['Int']['output']>;
	amUser?: Maybe<Scalars['Int']['output']>;
	apk?: Maybe<Scalars['Int']['output']>;
	brew?: Maybe<Scalars['Int']['output']>;
	brewCask?: Maybe<Scalars['Int']['output']>;
	choco?: Maybe<Scalars['Int']['output']>;
	dpkg?: Maybe<Scalars['Int']['output']>;
	emerge?: Maybe<Scalars['Int']['output']>;
	eopkg?: Maybe<Scalars['Int']['output']>;
	flatpakSystem?: Maybe<Scalars['Int']['output']>;
	flatpakUser?: Maybe<Scalars['Int']['output']>;
	guixHome?: Maybe<Scalars['Int']['output']>;
	guixSystem?: Maybe<Scalars['Int']['output']>;
	guixUser?: Maybe<Scalars['Int']['output']>;
	hpkgSystem?: Maybe<Scalars['Int']['output']>;
	hpkgUser?: Maybe<Scalars['Int']['output']>;
	linglong?: Maybe<Scalars['Int']['output']>;
	macports?: Maybe<Scalars['Int']['output']>;
	mport?: Maybe<Scalars['Int']['output']>;
	nixDefault?: Maybe<Scalars['Int']['output']>;
	nixSystem?: Maybe<Scalars['Int']['output']>;
	nixUser?: Maybe<Scalars['Int']['output']>;
	opkg?: Maybe<Scalars['Int']['output']>;
	pacman?: Maybe<Scalars['Int']['output']>;
	pacmanBranch?: Maybe<Scalars['String']['output']>;
	pacstall?: Maybe<Scalars['Int']['output']>;
	paludis?: Maybe<Scalars['Int']['output']>;
	pisi?: Maybe<Scalars['Int']['output']>;
	pkg?: Maybe<Scalars['Int']['output']>;
	pkgsrc?: Maybe<Scalars['Int']['output']>;
	pkgtool?: Maybe<Scalars['Int']['output']>;
	rpm?: Maybe<Scalars['Int']['output']>;
	scoopGlobal?: Maybe<Scalars['Int']['output']>;
	scoopUser?: Maybe<Scalars['Int']['output']>;
	snap?: Maybe<Scalars['Int']['output']>;
	soar?: Maybe<Scalars['Int']['output']>;
	sorcery?: Maybe<Scalars['Int']['output']>;
	winget?: Maybe<Scalars['Int']['output']>;
	xbps?: Maybe<Scalars['Int']['output']>;
};

export type FastfetchPowerAdapter = {
	__typename?: 'FastfetchPowerAdapter';
	description?: Maybe<Scalars['String']['output']>;
	manufacturer?: Maybe<Scalars['String']['output']>;
	modelName?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	serial?: Maybe<Scalars['String']['output']>;
	watts?: Maybe<Scalars['Int']['output']>;
};

export type FastfetchResult = {
	__typename?: 'FastfetchResult';
	battery: Array<FastfetchBattery>;
	cpu: FastfetchCpu;
	cursor: FastfetchCursor;
	de: FastfetchDe;
	disk: Array<FastfetchDisk>;
	display: Array<FastfetchDisplay>;
	font: FastfetchFont;
	gpu: Array<FastfetchGpu>;
	host: FastfetchHost;
	kernel: FastfetchKernel;
	localIp: Array<FastfetchLocalIp>;
	locale?: Maybe<Scalars['String']['output']>;
	memory: FastfetchMemory;
	os: FastfetchOs;
	packages: FastfetchPackages;
	powerAdapter: Array<FastfetchPowerAdapter>;
	shell: FastfetchShell;
	swap: Array<FastfetchSwap>;
	terminal: FastfetchTerminal;
	terminalFont: FastfetchTerminalFont;
	title: FastfetchTitle;
	uptime: FastfetchUptime;
	wm: FastfetchWm;
};

export type FastfetchShell = {
	__typename?: 'FastfetchShell';
	exe?: Maybe<Scalars['String']['output']>;
	exeName?: Maybe<Scalars['String']['output']>;
	exePath?: Maybe<Scalars['String']['output']>;
	pid?: Maybe<Scalars['Int']['output']>;
	ppid?: Maybe<Scalars['Int']['output']>;
	prettyName?: Maybe<Scalars['String']['output']>;
	processName?: Maybe<Scalars['String']['output']>;
	tty?: Maybe<Scalars['Int']['output']>;
	version?: Maybe<Scalars['String']['output']>;
};

export type FastfetchStreamInput = {
	interval: Scalars['Int']['input'];
};

export type FastfetchStreamResult = {
	__typename?: 'FastfetchStreamResult';
	data?: Maybe<FastfetchResult>;
	message?: Maybe<Scalars['String']['output']>;
};

export type FastfetchSwap = {
	__typename?: 'FastfetchSwap';
	name?: Maybe<Scalars['String']['output']>;
	total?: Maybe<Scalars['Int']['output']>;
	used?: Maybe<Scalars['Int']['output']>;
};

export type FastfetchTerminal = {
	__typename?: 'FastfetchTerminal';
	exe?: Maybe<Scalars['String']['output']>;
	exeName?: Maybe<Scalars['String']['output']>;
	exePath?: Maybe<Scalars['String']['output']>;
	pid?: Maybe<Scalars['Int']['output']>;
	ppid?: Maybe<Scalars['Int']['output']>;
	prettyName?: Maybe<Scalars['String']['output']>;
	processName?: Maybe<Scalars['String']['output']>;
	tty?: Maybe<Scalars['String']['output']>;
	version?: Maybe<Scalars['String']['output']>;
};

export type FastfetchTerminalFont = {
	__typename?: 'FastfetchTerminalFont';
	fallback?: Maybe<Fallback>;
	font?: Maybe<Font>;
};

export type FastfetchTitle = {
	__typename?: 'FastfetchTitle';
	exePath: Scalars['String']['output'];
	fullUserName: Scalars['String']['output'];
	homeDir: Scalars['String']['output'];
	hostName: Scalars['String']['output'];
	userName: Scalars['String']['output'];
	userShell: Scalars['String']['output'];
};

export type FastfetchUptime = {
	__typename?: 'FastfetchUptime';
	bootTime: Scalars['Time']['output'];
	uptime?: Maybe<Scalars['Int']['output']>;
};

export type FastfetchWm = {
	__typename?: 'FastfetchWM';
	pluginName?: Maybe<Scalars['String']['output']>;
	prettyName?: Maybe<Scalars['String']['output']>;
	processName?: Maybe<Scalars['String']['output']>;
	protocolName?: Maybe<Scalars['String']['output']>;
	version?: Maybe<Scalars['String']['output']>;
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

export type Font = {
	__typename?: 'Font';
	name?: Maybe<Scalars['String']['output']>;
	pretty?: Maybe<Scalars['String']['output']>;
	size?: Maybe<Scalars['String']['output']>;
	styles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Frequency = {
	__typename?: 'Frequency';
	base?: Maybe<Scalars['Int']['output']>;
	max?: Maybe<Scalars['Int']['output']>;
};

export type GpuMemory = {
	__typename?: 'GpuMemory';
	dedicated?: Maybe<Dedicated>;
	shared?: Maybe<Shared>;
	type?: Maybe<Scalars['String']['output']>;
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

export type ManufactureDate = {
	__typename?: 'ManufactureDate';
	week?: Maybe<Scalars['Int']['output']>;
	year?: Maybe<Scalars['Int']['output']>;
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
	fastfetch: FastfetchResult;
	ping: Scalars['String']['output'];
	vnstat: VnstatResult;
};

export type QueryVnstatArgs = {
	input: VnstatInput;
};

export type Resolution = {
	__typename?: 'Resolution';
	height?: Maybe<Scalars['Int']['output']>;
	refreshRate?: Maybe<Scalars['Float']['output']>;
	width?: Maybe<Scalars['Int']['output']>;
};

export type Shared = {
	__typename?: 'Shared';
	total?: Maybe<Scalars['Int']['output']>;
	used?: Maybe<Scalars['Int']['output']>;
};

export type Size = {
	__typename?: 'Size';
	height?: Maybe<Scalars['Int']['output']>;
	width?: Maybe<Scalars['Int']['output']>;
};

export type Subscription = {
	__typename?: 'Subscription';
	fastfetch: FastfetchStreamResult;
	vnstat: VnstatStreamResult;
};

export type SubscriptionFastfetchArgs = {
	input: FastfetchStreamInput;
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

export type Usage = {
	__typename?: 'Usage';
	available?: Maybe<Scalars['Int']['output']>;
	free?: Maybe<Scalars['Int']['output']>;
	total?: Maybe<Scalars['Int']['output']>;
	used?: Maybe<Scalars['Int']['output']>;
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

export type FastfetchDataFragment = {
	__typename?: 'FastfetchResult';
	locale?: string | null;
	title: {
		__typename?: 'FastfetchTitle';
		userName: string;
		fullUserName: string;
		hostName: string;
		homeDir: string;
		exePath: string;
		userShell: string;
	};
	host: {
		__typename?: 'FastfetchHost';
		family?: string | null;
		name?: string | null;
		version?: string | null;
		sku?: string | null;
		vendor?: string | null;
		serial?: string | null;
		uuid?: string | null;
	};
	kernel: {
		__typename?: 'FastfetchKernel';
		architecture?: string | null;
		name?: string | null;
		release?: string | null;
		version?: string | null;
		displayVersion?: string | null;
		pageSize?: number | null;
	};
	os: {
		__typename?: 'FastfetchOS';
		buildID?: string | null;
		codename?: string | null;
		id?: string | null;
		idLike?: string | null;
		name?: string | null;
		prettyName?: string | null;
		variantID?: string | null;
		version?: string | null;
		versionID?: string | null;
	};
	uptime: { __typename?: 'FastfetchUptime'; uptime?: number | null; bootTime: string };
	shell: {
		__typename?: 'FastfetchShell';
		exe?: string | null;
		exeName?: string | null;
		exePath?: string | null;
		pid?: number | null;
		ppid?: number | null;
		processName?: string | null;
		prettyName?: string | null;
		version?: string | null;
		tty?: number | null;
	};
	display: Array<{
		__typename?: 'FastfetchDisplay';
		id?: number | null;
		name?: string | null;
		primary?: boolean | null;
		rotation?: number | null;
		bitDepth?: number | null;
		hdrStatus?: string | null;
		type?: string | null;
		serial?: number | null;
		platformApi?: string | null;
		output?: {
			__typename?: 'Resolution';
			width?: number | null;
			height?: number | null;
			refreshRate?: number | null;
		} | null;
		scaled?: {
			__typename?: 'Resolution';
			width?: number | null;
			height?: number | null;
			refreshRate?: number | null;
		} | null;
		preferred?: {
			__typename?: 'Resolution';
			width?: number | null;
			height?: number | null;
			refreshRate?: number | null;
		} | null;
		physical?: { __typename?: 'Size'; width?: number | null; height?: number | null } | null;
		manufactureDate?: {
			__typename?: 'ManufactureDate';
			year?: number | null;
			week?: number | null;
		} | null;
	}>;
	de: {
		__typename?: 'FastfetchDE';
		processName?: string | null;
		prettyName?: string | null;
		version?: string | null;
	};
	wm: {
		__typename?: 'FastfetchWM';
		processName?: string | null;
		prettyName?: string | null;
		protocolName?: string | null;
		pluginName?: string | null;
		version?: string | null;
	};
	cursor: { __typename?: 'FastfetchCursor'; theme?: string | null; size?: string | null };
	terminal: {
		__typename?: 'FastfetchTerminal';
		processName?: string | null;
		exe?: string | null;
		exeName?: string | null;
		exePath?: string | null;
		pid?: number | null;
		ppid?: number | null;
		prettyName?: string | null;
		version?: string | null;
		tty?: string | null;
	};
	font: {
		__typename?: 'FastfetchFont';
		display?: string | null;
		fonts?: Array<string | null> | null;
	};
	cpu: {
		__typename?: 'FastfetchCPU';
		cpu?: string | null;
		vendor?: string | null;
		packages?: number | null;
		coreTypes?: Array<string | null> | null;
		temperature?: number | null;
		march?: string | null;
		cores?: {
			__typename?: 'CoreInfo';
			physical?: number | null;
			logical?: number | null;
			online?: number | null;
		} | null;
		frequency?: { __typename?: 'Frequency'; base?: number | null; max?: number | null } | null;
	};
	gpu: Array<{
		__typename?: 'FastfetchGPU';
		index?: number | null;
		coreCount?: number | null;
		coreUsage?: number | null;
		driver?: string | null;
		name?: string | null;
		temperature?: number | null;
		type?: string | null;
		vendor?: string | null;
		platformApi?: string | null;
		frequency?: number | null;
		deviceId?: number | null;
		memory?: {
			__typename?: 'GpuMemory';
			type?: string | null;
			dedicated?: { __typename?: 'Dedicated'; total?: number | null; used?: number | null } | null;
			shared?: { __typename?: 'Shared'; total?: number | null; used?: number | null } | null;
		} | null;
	}>;
	memory: { __typename?: 'FastfetchMemory'; total?: number | null; used?: number | null };
	swap: Array<{
		__typename?: 'FastfetchSwap';
		name?: string | null;
		used?: number | null;
		total?: number | null;
	}>;
	disk: Array<{
		__typename?: 'FastfetchDisk';
		filesystem?: string | null;
		mountpoint?: string | null;
		mountFrom?: string | null;
		name?: string | null;
		volumeType?: Array<string | null> | null;
		createTime?: string | null;
		bytes?: {
			__typename?: 'Usage';
			available?: number | null;
			free?: number | null;
			total?: number | null;
			used?: number | null;
		} | null;
		files?: { __typename?: 'DiskFiles'; total?: number | null; used?: number | null } | null;
	}>;
	localIp: Array<{ __typename?: 'FastfetchLocalIP'; name?: string | null; ipv4?: string | null }>;
	battery: Array<{
		__typename?: 'FastfetchBattery';
		capacity?: number | null;
		manufacturer?: string | null;
		manufactureDate?: string | null;
		modelName?: string | null;
		status?: string | null;
		technology?: string | null;
		serial?: string | null;
		temperature?: number | null;
		cycleCount?: number | null;
		timeRemaining?: number | null;
	}>;
	powerAdapter: Array<{
		__typename?: 'FastfetchPowerAdapter';
		description?: string | null;
		manufacturer?: string | null;
		modelName?: string | null;
		name?: string | null;
		serial?: string | null;
		watts?: number | null;
	}>;
};

export type FastfetchGetQueryVariables = Exact<{ [key: string]: never }>;

export type FastfetchGetQuery = {
	__typename?: 'Query';
	fastfetch: {
		__typename?: 'FastfetchResult';
		locale?: string | null;
		title: {
			__typename?: 'FastfetchTitle';
			userName: string;
			fullUserName: string;
			hostName: string;
			homeDir: string;
			exePath: string;
			userShell: string;
		};
		host: {
			__typename?: 'FastfetchHost';
			family?: string | null;
			name?: string | null;
			version?: string | null;
			sku?: string | null;
			vendor?: string | null;
			serial?: string | null;
			uuid?: string | null;
		};
		kernel: {
			__typename?: 'FastfetchKernel';
			architecture?: string | null;
			name?: string | null;
			release?: string | null;
			version?: string | null;
			displayVersion?: string | null;
			pageSize?: number | null;
		};
		os: {
			__typename?: 'FastfetchOS';
			buildID?: string | null;
			codename?: string | null;
			id?: string | null;
			idLike?: string | null;
			name?: string | null;
			prettyName?: string | null;
			variantID?: string | null;
			version?: string | null;
			versionID?: string | null;
		};
		uptime: { __typename?: 'FastfetchUptime'; uptime?: number | null; bootTime: string };
		shell: {
			__typename?: 'FastfetchShell';
			exe?: string | null;
			exeName?: string | null;
			exePath?: string | null;
			pid?: number | null;
			ppid?: number | null;
			processName?: string | null;
			prettyName?: string | null;
			version?: string | null;
			tty?: number | null;
		};
		display: Array<{
			__typename?: 'FastfetchDisplay';
			id?: number | null;
			name?: string | null;
			primary?: boolean | null;
			rotation?: number | null;
			bitDepth?: number | null;
			hdrStatus?: string | null;
			type?: string | null;
			serial?: number | null;
			platformApi?: string | null;
			output?: {
				__typename?: 'Resolution';
				width?: number | null;
				height?: number | null;
				refreshRate?: number | null;
			} | null;
			scaled?: {
				__typename?: 'Resolution';
				width?: number | null;
				height?: number | null;
				refreshRate?: number | null;
			} | null;
			preferred?: {
				__typename?: 'Resolution';
				width?: number | null;
				height?: number | null;
				refreshRate?: number | null;
			} | null;
			physical?: { __typename?: 'Size'; width?: number | null; height?: number | null } | null;
			manufactureDate?: {
				__typename?: 'ManufactureDate';
				year?: number | null;
				week?: number | null;
			} | null;
		}>;
		de: {
			__typename?: 'FastfetchDE';
			processName?: string | null;
			prettyName?: string | null;
			version?: string | null;
		};
		wm: {
			__typename?: 'FastfetchWM';
			processName?: string | null;
			prettyName?: string | null;
			protocolName?: string | null;
			pluginName?: string | null;
			version?: string | null;
		};
		cursor: { __typename?: 'FastfetchCursor'; theme?: string | null; size?: string | null };
		terminal: {
			__typename?: 'FastfetchTerminal';
			processName?: string | null;
			exe?: string | null;
			exeName?: string | null;
			exePath?: string | null;
			pid?: number | null;
			ppid?: number | null;
			prettyName?: string | null;
			version?: string | null;
			tty?: string | null;
		};
		font: {
			__typename?: 'FastfetchFont';
			display?: string | null;
			fonts?: Array<string | null> | null;
		};
		cpu: {
			__typename?: 'FastfetchCPU';
			cpu?: string | null;
			vendor?: string | null;
			packages?: number | null;
			coreTypes?: Array<string | null> | null;
			temperature?: number | null;
			march?: string | null;
			cores?: {
				__typename?: 'CoreInfo';
				physical?: number | null;
				logical?: number | null;
				online?: number | null;
			} | null;
			frequency?: { __typename?: 'Frequency'; base?: number | null; max?: number | null } | null;
		};
		gpu: Array<{
			__typename?: 'FastfetchGPU';
			index?: number | null;
			coreCount?: number | null;
			coreUsage?: number | null;
			driver?: string | null;
			name?: string | null;
			temperature?: number | null;
			type?: string | null;
			vendor?: string | null;
			platformApi?: string | null;
			frequency?: number | null;
			deviceId?: number | null;
			memory?: {
				__typename?: 'GpuMemory';
				type?: string | null;
				dedicated?: {
					__typename?: 'Dedicated';
					total?: number | null;
					used?: number | null;
				} | null;
				shared?: { __typename?: 'Shared'; total?: number | null; used?: number | null } | null;
			} | null;
		}>;
		memory: { __typename?: 'FastfetchMemory'; total?: number | null; used?: number | null };
		swap: Array<{
			__typename?: 'FastfetchSwap';
			name?: string | null;
			used?: number | null;
			total?: number | null;
		}>;
		disk: Array<{
			__typename?: 'FastfetchDisk';
			filesystem?: string | null;
			mountpoint?: string | null;
			mountFrom?: string | null;
			name?: string | null;
			volumeType?: Array<string | null> | null;
			createTime?: string | null;
			bytes?: {
				__typename?: 'Usage';
				available?: number | null;
				free?: number | null;
				total?: number | null;
				used?: number | null;
			} | null;
			files?: { __typename?: 'DiskFiles'; total?: number | null; used?: number | null } | null;
		}>;
		localIp: Array<{ __typename?: 'FastfetchLocalIP'; name?: string | null; ipv4?: string | null }>;
		battery: Array<{
			__typename?: 'FastfetchBattery';
			capacity?: number | null;
			manufacturer?: string | null;
			manufactureDate?: string | null;
			modelName?: string | null;
			status?: string | null;
			technology?: string | null;
			serial?: string | null;
			temperature?: number | null;
			cycleCount?: number | null;
			timeRemaining?: number | null;
		}>;
		powerAdapter: Array<{
			__typename?: 'FastfetchPowerAdapter';
			description?: string | null;
			manufacturer?: string | null;
			modelName?: string | null;
			name?: string | null;
			serial?: string | null;
			watts?: number | null;
		}>;
	};
};

export type FastfetchStreamSubscriptionVariables = Exact<{
	input: FastfetchStreamInput;
}>;

export type FastfetchStreamSubscription = {
	__typename?: 'Subscription';
	fastfetch: {
		__typename?: 'FastfetchStreamResult';
		message?: string | null;
		data?: {
			__typename?: 'FastfetchResult';
			locale?: string | null;
			title: {
				__typename?: 'FastfetchTitle';
				userName: string;
				fullUserName: string;
				hostName: string;
				homeDir: string;
				exePath: string;
				userShell: string;
			};
			host: {
				__typename?: 'FastfetchHost';
				family?: string | null;
				name?: string | null;
				version?: string | null;
				sku?: string | null;
				vendor?: string | null;
				serial?: string | null;
				uuid?: string | null;
			};
			kernel: {
				__typename?: 'FastfetchKernel';
				architecture?: string | null;
				name?: string | null;
				release?: string | null;
				version?: string | null;
				displayVersion?: string | null;
				pageSize?: number | null;
			};
			os: {
				__typename?: 'FastfetchOS';
				buildID?: string | null;
				codename?: string | null;
				id?: string | null;
				idLike?: string | null;
				name?: string | null;
				prettyName?: string | null;
				variantID?: string | null;
				version?: string | null;
				versionID?: string | null;
			};
			uptime: { __typename?: 'FastfetchUptime'; uptime?: number | null; bootTime: string };
			shell: {
				__typename?: 'FastfetchShell';
				exe?: string | null;
				exeName?: string | null;
				exePath?: string | null;
				pid?: number | null;
				ppid?: number | null;
				processName?: string | null;
				prettyName?: string | null;
				version?: string | null;
				tty?: number | null;
			};
			display: Array<{
				__typename?: 'FastfetchDisplay';
				id?: number | null;
				name?: string | null;
				primary?: boolean | null;
				rotation?: number | null;
				bitDepth?: number | null;
				hdrStatus?: string | null;
				type?: string | null;
				serial?: number | null;
				platformApi?: string | null;
				output?: {
					__typename?: 'Resolution';
					width?: number | null;
					height?: number | null;
					refreshRate?: number | null;
				} | null;
				scaled?: {
					__typename?: 'Resolution';
					width?: number | null;
					height?: number | null;
					refreshRate?: number | null;
				} | null;
				preferred?: {
					__typename?: 'Resolution';
					width?: number | null;
					height?: number | null;
					refreshRate?: number | null;
				} | null;
				physical?: { __typename?: 'Size'; width?: number | null; height?: number | null } | null;
				manufactureDate?: {
					__typename?: 'ManufactureDate';
					year?: number | null;
					week?: number | null;
				} | null;
			}>;
			de: {
				__typename?: 'FastfetchDE';
				processName?: string | null;
				prettyName?: string | null;
				version?: string | null;
			};
			wm: {
				__typename?: 'FastfetchWM';
				processName?: string | null;
				prettyName?: string | null;
				protocolName?: string | null;
				pluginName?: string | null;
				version?: string | null;
			};
			cursor: { __typename?: 'FastfetchCursor'; theme?: string | null; size?: string | null };
			terminal: {
				__typename?: 'FastfetchTerminal';
				processName?: string | null;
				exe?: string | null;
				exeName?: string | null;
				exePath?: string | null;
				pid?: number | null;
				ppid?: number | null;
				prettyName?: string | null;
				version?: string | null;
				tty?: string | null;
			};
			font: {
				__typename?: 'FastfetchFont';
				display?: string | null;
				fonts?: Array<string | null> | null;
			};
			cpu: {
				__typename?: 'FastfetchCPU';
				cpu?: string | null;
				vendor?: string | null;
				packages?: number | null;
				coreTypes?: Array<string | null> | null;
				temperature?: number | null;
				march?: string | null;
				cores?: {
					__typename?: 'CoreInfo';
					physical?: number | null;
					logical?: number | null;
					online?: number | null;
				} | null;
				frequency?: { __typename?: 'Frequency'; base?: number | null; max?: number | null } | null;
			};
			gpu: Array<{
				__typename?: 'FastfetchGPU';
				index?: number | null;
				coreCount?: number | null;
				coreUsage?: number | null;
				driver?: string | null;
				name?: string | null;
				temperature?: number | null;
				type?: string | null;
				vendor?: string | null;
				platformApi?: string | null;
				frequency?: number | null;
				deviceId?: number | null;
				memory?: {
					__typename?: 'GpuMemory';
					type?: string | null;
					dedicated?: {
						__typename?: 'Dedicated';
						total?: number | null;
						used?: number | null;
					} | null;
					shared?: { __typename?: 'Shared'; total?: number | null; used?: number | null } | null;
				} | null;
			}>;
			memory: { __typename?: 'FastfetchMemory'; total?: number | null; used?: number | null };
			swap: Array<{
				__typename?: 'FastfetchSwap';
				name?: string | null;
				used?: number | null;
				total?: number | null;
			}>;
			disk: Array<{
				__typename?: 'FastfetchDisk';
				filesystem?: string | null;
				mountpoint?: string | null;
				mountFrom?: string | null;
				name?: string | null;
				volumeType?: Array<string | null> | null;
				createTime?: string | null;
				bytes?: {
					__typename?: 'Usage';
					available?: number | null;
					free?: number | null;
					total?: number | null;
					used?: number | null;
				} | null;
				files?: { __typename?: 'DiskFiles'; total?: number | null; used?: number | null } | null;
			}>;
			localIp: Array<{
				__typename?: 'FastfetchLocalIP';
				name?: string | null;
				ipv4?: string | null;
			}>;
			battery: Array<{
				__typename?: 'FastfetchBattery';
				capacity?: number | null;
				manufacturer?: string | null;
				manufactureDate?: string | null;
				modelName?: string | null;
				status?: string | null;
				technology?: string | null;
				serial?: string | null;
				temperature?: number | null;
				cycleCount?: number | null;
				timeRemaining?: number | null;
			}>;
			powerAdapter: Array<{
				__typename?: 'FastfetchPowerAdapter';
				description?: string | null;
				manufacturer?: string | null;
				modelName?: string | null;
				name?: string | null;
				serial?: string | null;
				watts?: number | null;
			}>;
		} | null;
	};
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

export const FastfetchDataFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'FastfetchData' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'FastfetchResult' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'title' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'userName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'fullUserName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'hostName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'homeDir' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exePath' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'userShell' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'host' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'family' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'sku' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'vendor' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'uuid' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'kernel' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'architecture' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'release' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'displayVersion' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pageSize' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'os' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'buildID' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'codename' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'idLike' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'variantID' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'versionID' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'uptime' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'uptime' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'bootTime' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'shell' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'exe' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exeName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exePath' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'ppid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tty' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'display' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'primary' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'output' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'refreshRate' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'scaled' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'refreshRate' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'preferred' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'refreshRate' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'physical' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'rotation' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'bitDepth' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'hdrStatus' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'manufactureDate' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'year' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'week' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'platformApi' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'de' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'wm' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'protocolName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pluginName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'cursor' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'terminal' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exe' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exeName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exePath' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'ppid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tty' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'font' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'display' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'fonts' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'cpu' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'cpu' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'vendor' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'packages' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'cores' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'physical' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'logical' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'online' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'frequency' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'base' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'max' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'coreTypes' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'temperature' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'march' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gpu' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'index' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'coreCount' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'coreUsage' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'memory' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'dedicated' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
													]
												}
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'shared' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
													]
												}
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'type' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'driver' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'temperature' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'vendor' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'platformApi' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'deviceId' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'memory' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'swap' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'used' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'disk' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'bytes' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'available' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'free' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'files' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'filesystem' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'mountpoint' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'mountFrom' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'volumeType' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'createTime' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'localIp' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'ipv4' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'battery' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'capacity' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'manufacturer' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'manufactureDate' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'modelName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'status' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'technology' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'temperature' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'cycleCount' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'timeRemaining' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'powerAdapter' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'manufacturer' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'modelName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'watts' } }
							]
						}
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'locale' } }
				]
			}
		}
	]
} as unknown as DocumentNode<FastfetchDataFragment, unknown>;
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
export const FastfetchGetDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'FastfetchGet' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'fastfetch' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'FastfetchData' } }
							]
						}
					}
				]
			}
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'FastfetchData' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'FastfetchResult' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'title' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'userName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'fullUserName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'hostName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'homeDir' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exePath' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'userShell' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'host' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'family' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'sku' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'vendor' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'uuid' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'kernel' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'architecture' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'release' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'displayVersion' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pageSize' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'os' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'buildID' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'codename' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'idLike' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'variantID' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'versionID' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'uptime' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'uptime' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'bootTime' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'shell' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'exe' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exeName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exePath' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'ppid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tty' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'display' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'primary' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'output' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'refreshRate' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'scaled' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'refreshRate' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'preferred' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'refreshRate' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'physical' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'rotation' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'bitDepth' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'hdrStatus' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'manufactureDate' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'year' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'week' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'platformApi' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'de' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'wm' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'protocolName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pluginName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'cursor' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'terminal' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exe' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exeName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exePath' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'ppid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tty' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'font' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'display' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'fonts' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'cpu' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'cpu' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'vendor' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'packages' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'cores' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'physical' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'logical' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'online' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'frequency' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'base' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'max' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'coreTypes' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'temperature' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'march' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gpu' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'index' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'coreCount' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'coreUsage' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'memory' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'dedicated' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
													]
												}
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'shared' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
													]
												}
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'type' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'driver' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'temperature' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'vendor' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'platformApi' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'deviceId' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'memory' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'swap' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'used' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'disk' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'bytes' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'available' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'free' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'files' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'filesystem' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'mountpoint' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'mountFrom' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'volumeType' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'createTime' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'localIp' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'ipv4' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'battery' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'capacity' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'manufacturer' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'manufactureDate' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'modelName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'status' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'technology' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'temperature' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'cycleCount' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'timeRemaining' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'powerAdapter' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'manufacturer' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'modelName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'watts' } }
							]
						}
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'locale' } }
				]
			}
		}
	]
} as unknown as DocumentNode<FastfetchGetQuery, FastfetchGetQueryVariables>;
export const FastfetchStreamDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'subscription',
			name: { kind: 'Name', value: 'FastfetchStream' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'FastfetchStreamInput' } }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'fastfetch' },
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
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'FastfetchData' } }
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
			name: { kind: 'Name', value: 'FastfetchData' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'FastfetchResult' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'title' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'userName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'fullUserName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'hostName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'homeDir' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exePath' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'userShell' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'host' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'family' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'sku' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'vendor' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'uuid' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'kernel' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'architecture' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'release' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'displayVersion' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pageSize' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'os' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'buildID' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'codename' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'idLike' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'variantID' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'versionID' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'uptime' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'uptime' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'bootTime' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'shell' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'exe' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exeName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exePath' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'ppid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tty' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'display' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'primary' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'output' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'refreshRate' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'scaled' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'refreshRate' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'preferred' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'refreshRate' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'physical' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'height' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'rotation' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'bitDepth' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'hdrStatus' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'manufactureDate' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'year' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'week' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'platformApi' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'de' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'wm' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'protocolName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pluginName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'cursor' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'terminal' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'processName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exe' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exeName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'exePath' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'pid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'ppid' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'prettyName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'version' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'tty' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'font' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'display' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'fonts' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'cpu' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'cpu' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'vendor' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'packages' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'cores' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'physical' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'logical' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'online' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'frequency' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'base' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'max' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'coreTypes' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'temperature' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'march' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gpu' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'index' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'coreCount' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'coreUsage' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'memory' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'dedicated' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
													]
												}
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'shared' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
													]
												}
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'type' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'driver' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'temperature' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'vendor' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'platformApi' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'deviceId' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'memory' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'swap' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'used' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'total' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'disk' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'bytes' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'available' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'free' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'files' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'used' } }
										]
									}
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'filesystem' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'mountpoint' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'mountFrom' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'volumeType' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'createTime' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'localIp' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'ipv4' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'battery' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'capacity' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'manufacturer' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'manufactureDate' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'modelName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'status' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'technology' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'temperature' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'cycleCount' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'timeRemaining' } }
							]
						}
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'powerAdapter' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'manufacturer' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'modelName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'serial' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'watts' } }
							]
						}
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'locale' } }
				]
			}
		}
	]
} as unknown as DocumentNode<FastfetchStreamSubscription, FastfetchStreamSubscriptionVariables>;
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

export function FastfetchStreamInputSchema(): z.ZodObject<Properties<FastfetchStreamInput>> {
	return z.object({
		interval: z.number()
	});
}

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
