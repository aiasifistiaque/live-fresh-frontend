import React from 'react';
import Page from '../../components/nav/page/Page';
import ProfileContainer from '../../components/profile/profile-container/ProfileContainer';
import ProfileManage from '../../components/profile/profile-overview/ProfileManage';

const Manageprofile = () => {
	return (
		<Page>
			<ProfileContainer title='Manage Profile' select='manage profile'>
				<ProfileManage />
			</ProfileContainer>
		</Page>
	);
};

export default Manageprofile;
