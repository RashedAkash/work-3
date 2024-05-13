import Container from "@/components/container/Container";
import ContainerFulid from "@/components/container/ContainerFulid";
import Sidebar from "@/components/sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <ContainerFulid>
      <Container>
        <div className="grid grid-cols-12 gap-7">
          <div className=" col-span-3">
            <Sidebar />
          </div>
          <div className=" col-span-9">{children}</div>
        </div>
      </Container>
    </ContainerFulid>
  );
};

export default layout;
