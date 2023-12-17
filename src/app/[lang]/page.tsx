import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import { styled } from 'styled-components';
import MyDivComponent from './_components/myDiv';



const Home = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { page } = dict.app;
	return (
		<>
			<h1>{page.title}</h1>
          <MyDivComponent/>
		</>
	);
};

export default Home;
