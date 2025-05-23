import { Splitter, SplitterPanel } from "primereact/splitter";
import { classNames } from "primereact/utils";
import React from "react";

export function Split() {
  return (
    <>
      <Splitter
      pt={{
            root:{className:"!border !border-4 !text-gray-500"},
            content:{classNames:"!bg-black"}
        }}
      style={{ height: "300px" }}>
        <SplitterPanel className="flex align-items-center justify-content-center flex-col" size={25} minSize={10}>
          <h1>Panel 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            unde labore deserunt sint, accusamus eum officia error ut, neque
            totam quas id. Impedit, architecto. Odit labore explicabo optio,
            itaque eos iure. Rerum asperiores doloribus voluptatibus natus harum
            corporis ea consequuntur, itaque, ipsam, vel recusandae
            necessitatibus id. Laborum aliquam maiores officia.
          </p>
        </SplitterPanel>
        <SplitterPanel className="flex align-items-center justify-content-center flex-col"size={75}>
          <h1>Panel 2</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque eum
            nam numquam veritatis maiores, eaque nemo voluptas id obcaecati odit
            tempora consequatur corporis quisquam repellendus illo nesciunt
            dolor consectetur exercitationem veniam voluptatum! Iure dolore
            distinctio voluptas quidem reprehenderit provident repudiandae sequi
            voluptatibus ab eum sed dolorem, assumenda impedit expedita nihil?
          </p>
        </SplitterPanel>
      </Splitter>
    </>
  );
}
