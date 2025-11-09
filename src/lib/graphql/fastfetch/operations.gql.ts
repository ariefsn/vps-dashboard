import { gql } from '@urql/svelte';

export const FASTFETCH_DATA_FRAGMENT = gql`
	fragment FastfetchData on FastfetchResult {
		title {
			userName
			fullUserName
			hostName
			homeDir
			exePath
			userShell
		}
		host {
			family
			name
			version
			sku
			vendor
			serial
			uuid
		}
		kernel {
			architecture
			name
			release
			version
			displayVersion
			pageSize
		}
		os {
			buildID
			codename
			id
			idLike
			name
			prettyName
			variantID
			version
			versionID
		}
		uptime {
			uptime
			bootTime
		}
		shell {
			exe
			exeName
			exePath
			pid
			ppid
			processName
			prettyName
			version
			tty
		}
		display {
			id
			name
			primary
			output {
				width
				height
				refreshRate
			}
			scaled {
				width
				height
				refreshRate
			}
			preferred {
				width
				height
				refreshRate
			}
			physical {
				width
				height
			}
			rotation
			bitDepth
			hdrStatus
			type
			manufactureDate {
				year
				week
			}
			serial
			platformApi
		}
		de {
			processName
			prettyName
			version
		}
		wm {
			processName
			prettyName
			protocolName
			pluginName
			version
		}
		cursor {
			theme
			size
		}
		terminal {
			processName
			exe
			exeName
			exePath
			pid
			ppid
			prettyName
			version
			tty
		}
		font {
			display
			fonts
		}
		cpu {
			cpu
			vendor
			packages
			cores {
				physical
				logical
				online
			}
			frequency {
				base
				max
			}
			coreTypes
			temperature
			march
		}
		gpu {
			index
			coreCount
			coreUsage
			memory {
				dedicated {
					total
					used
				}
				shared {
					total
					used
				}
				type
			}
			driver
			name
			temperature
			type
			vendor
			platformApi
			frequency
			deviceId
		}
		memory {
			total
			used
		}
		swap {
			name
			used
			total
		}
		disk {
			bytes {
				available
				free
				total
				used
			}
			files {
				total
				used
			}
			filesystem
			mountpoint
			mountFrom
			name
			volumeType
			createTime
		}
		localIp {
			name
			ipv4
		}
		battery {
			capacity
			manufacturer
			manufactureDate
			modelName
			status
			technology
			serial
			temperature
			cycleCount
			timeRemaining
		}
		powerAdapter {
			description
			manufacturer
			modelName
			name
			serial
			watts
		}
		locale
	}
`;

export const FASTFETCH_GET = gql`
	${FASTFETCH_DATA_FRAGMENT}

	query FastfetchGet {
		fastfetch {
			...FastfetchData
		}
	}
`;

export const FASTFETCH_STREAM = gql`
	${FASTFETCH_DATA_FRAGMENT}

	subscription FastfetchStream($input: FastfetchStreamInput!) {
		fastfetch(input: $input) {
			data {
				...FastfetchData
			}
			message
		}
	}
`;
