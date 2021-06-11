import { StyleSheet, Text, View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

import React from "react";

const Endorsed = () => {
	return (
		<Svg width={35} height={35} viewBox='0 0 47.284 40.635'>
			<Defs>
				<LinearGradient
					id='prefix__a'
					y1={0.5}
					x2={1}
					y2={0.5}
					gradientUnits='objectBoundingBox'
				>
					<Stop offset={0} />
					<Stop offset={0.547} stopColor='#39b54a' />
				</LinearGradient>
				<LinearGradient
					id='prefix__b'
					y1={0.5}
					x2={1}
					y2={0.5}
					gradientUnits='objectBoundingBox'
				>
					<Stop offset={0} />
					<Stop offset={0.007} stopColor='#010401' />
					<Stop offset={0.08} stopColor='#0e2d12' />
					<Stop offset={0.161} stopColor='#195221' />
					<Stop offset={0.247} stopColor='#23702e' />
					<Stop offset={0.34} stopColor='#2b8938' />
					<Stop offset={0.445} stopColor='#319d40' />
					<Stop offset={0.565} stopColor='#35aa45' />
					<Stop offset={0.717} stopColor='#38b249' />
					<Stop offset={1} stopColor='#39b54a' />
				</LinearGradient>
				<LinearGradient
					id='prefix__c'
					y1={0.5}
					x2={1}
					y2={0.5}
					gradientUnits='objectBoundingBox'
				>
					<Stop offset={0} stopColor='#366626' />
					<Stop offset={0.049} stopColor='#3c7530' />
					<Stop offset={0.2} stopColor='#4c9f4d' />
					<Stop offset={0.354} stopColor='#5ac166' />
					<Stop offset={0.51} stopColor='#65dc78' />
					<Stop offset={0.668} stopColor='#6cef86' />
					<Stop offset={0.829} stopColor='#71fb8e' />
					<Stop offset={1} stopColor='#73ff91' />
				</LinearGradient>
				<LinearGradient
					id='prefix__d'
					y1={0.5}
					x2={1}
					y2={0.5}
					gradientUnits='objectBoundingBox'
				>
					<Stop offset={0} stopColor='#39b54a' />
					<Stop offset={0.24} stopColor='#38b248' />
					<Stop offset={0.392} stopColor='#35a945' />
					<Stop offset={0.519} stopColor='#309b3f' />
					<Stop offset={0.633} stopColor='#2a8636' />
					<Stop offset={0.738} stopColor='#216b2b' />
					<Stop offset={0.837} stopColor='#174a1e' />
					<Stop offset={0.929} stopColor='#0b230e' />
					<Stop offset={1} />
				</LinearGradient>
				<LinearGradient
					id='prefix__e'
					y1={0.5}
					x2={1}
					y2={0.5}
					gradientUnits='objectBoundingBox'
				>
					<Stop offset={0} stopColor='#366626' />
					<Stop offset={0.248} stopColor='#376827' />
					<Stop offset={0.409} stopColor='#3a712d' />
					<Stop offset={0.545} stopColor='#408038' />
					<Stop offset={0.668} stopColor='#489547' />
					<Stop offset={0.781} stopColor='#53b05a' />
					<Stop offset={0.887} stopColor='#61d271' />
					<Stop offset={0.986} stopColor='#70f88c' />
					<Stop offset={1} stopColor='#73ff91' />
				</LinearGradient>
			</Defs>
			<Path
				d='M9.1 0h37.68a.508.508 0 01.508.508v1.878A7.219 7.219 0 0140.066 9.6H.508A.508.508 0 010 9.1 9.1 9.1 0 019.1 0z'
				transform='translate(0 15.515)'
				fill='url(#prefix__a)'
			/>
			<Path
				d='M899.284 576.97h-39.25a8.036 8.036 0 01-8.034-8.035v-1.57h37.68a9.6 9.6 0 019.604 9.605z'
				transform='translate(-852 -567.365)'
				fill='url(#prefix__b)'
			/>
			<Path
				d='M915.77 576.97h-16.53c-4.3-2.512-6.928-5.89-6.928-9.6h13.853a9.6 9.6 0 019.605 9.6z'
				transform='translate(-868.485 -567.365)'
				fill='url(#prefix__c)'
			/>
			<Path
				d='M899.284 629.47h-39.25a8.036 8.036 0 01-8.034-8.035v-1.57h37.68a9.6 9.6 0 019.604 9.605z'
				transform='translate(-852 -588.835)'
				fill='url(#prefix__d)'
			/>
			<Path
				d='M877.412 629.47h-17.377a8.036 8.036 0 01-8.035-8.035v-1.57h16.435c5.057 2.349 8.428 5.761 8.977 9.605z'
				transform='translate(-852 -588.835)'
				fill='url(#prefix__e)'
			/>
		</Svg>
	);
};

export default Endorsed;

const styles = StyleSheet.create({});
