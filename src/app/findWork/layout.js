import Container from "@/components/container/Container";
import ContainerFulid from "@/components/container/ContainerFulid";
import Sidebar from "@/components/sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <ContainerFulid>
      <Container>
        <div className="flex  gap-7">
          <div className=" ">
            <Sidebar />
          </div>
          <div className=" ">{children}</div>
        </div>
      </Container>
    </ContainerFulid>
  );
};

export default layout;
