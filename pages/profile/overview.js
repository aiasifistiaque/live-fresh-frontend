import React from 'react';
import Page from '../../components/nav/page/Page';
import ProfileContainer from '../../components/profile/profile-container/ProfileContainer';
import ProfileOverview from '../../components/profile/profile-overview/ProfileOverview';

const overview = () => {
	return (
		<Page>
			<ProfileContainer title='Profile Overview' select='overview'>
				<ProfileOverview />
			</ProfileContainer>
		</Page>
	);
};

export default overview;
