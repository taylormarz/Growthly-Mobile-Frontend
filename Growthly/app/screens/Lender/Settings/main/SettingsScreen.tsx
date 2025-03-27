import React from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import { useUser } from '@/context/UserContext';
import { useLenderNavigation } from '@/app/utils/navigation/lenderNavigation';
import styles from '@/styles/Settings/main/settings-styles';
import Header from '@/app/components/Header/Header';
import SettingButton from '@/app/components/SecondaryButton/SettingButton';
import NavBar from '@/app/components/NavBar/NavBar';

export default function SettingsScreen() {
	const { user } = useUser();
	const lenderNav = useLenderNavigation();

	return (
		<View style={styles.screenContainer}>
			<Header
				title={`Welcome, ${user?.first_name || 'Guest'}! `}
				subtitle="Make changes to your account below."
			/>

			<Text style={styles.headerText}>Settings</Text>
			<View style={styles.settingsContainer}>
				<View>
					<View>
						{/* settings list */}
						<SettingButton
							listItem="Edit Bank Account"
							buttonText="+"
							onPress={lenderNav.navigateToLenderBankAccount}
						></SettingButton>
						<SettingButton
							listItem="Edit Email"
							buttonText="+"
							onPress={lenderNav.navigateToLenderEditEmail}
						></SettingButton>
						<SettingButton
							listItem="Edit Address"
							buttonText="+"
							onPress={lenderNav.navigateToLenderEditAddress}
						></SettingButton>
						<SettingButton
							listItem="Change Password"
							buttonText="+"
							onPress={lenderNav.navigateToLenderChangePass}
						></SettingButton>
						<SettingButton
							listItem="Contact Us"
							buttonText="+"
							onPress={lenderNav.navigateToLenderContactUs}
						></SettingButton>

						{/* delete account button */}
						<View>
							<TouchableOpacity
								style={styles.deleteButton}
								onPress={lenderNav.navigateToLenderDeleteAccount}>
								<Text
									style={styles.buttonText}>Delete Account
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
			<NavBar />
		</View>
	);
}