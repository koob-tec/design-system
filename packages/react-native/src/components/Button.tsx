import { TouchableOpacity, Text } from 'react-native';

export function ButtonNative() {
	return (
		<TouchableOpacity style={{ padding: 20, backgroundColor: 'blue'}}>
			<Text style={{ color: 'red' }}>RN button</Text>
		</TouchableOpacity>
	);
}