import InfoList from "@/components/card/InfoList";
import { store } from "@/store";
import { getUserContentThunk } from "@/store/content/contentThunk";
import ContentPreloader from "@/store/ContentPreloader";

const Home = async () => {
  await store.dispatch(getUserContentThunk());
  const userContent = store.getState().content.userContent;

  return (
    <>
      <ContentPreloader content={userContent} />
      <div className="h-screen">
        <InfoList />
      </div>
    </>
  );
};

export default Home;
