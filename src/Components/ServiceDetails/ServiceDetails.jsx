import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

function ServiceDetails() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 p-8 gap-10 container">
        <div class="bg-blue-100 p-5 w-full">
          jsdfjklsjdfkljskl Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Doloribus sed fuga a ullam? Numquam laboriosam fugiat nemo atque
          excepturi qui voluptatibus ex a nostrum ratione adipisci obcaecati sed
          enim quam reprehenderit, itaque voluptatem perferendis est non. Ut ex
          dolorum placeat exercitationem asperiores reiciendis tenetur quis nisi
          magni at, a vel debitis eius minus suscipit saepe fugiat quibusdam
          expedita? Itaque obcaecati vitae recusandae blanditiis molestiae
          necessitatibus amet fugiat, ullam sequi, dignissimos ut dolor
          voluptatibus aut ipsa quam, consectetur accusamus consequuntur
          voluptates natus saepe illum iusto magni aliquam explicabo. Sed
          accusamus quia excepturi quis esse id quidem placeat aliquid deleniti
          nemo iusto architecto unde, nam asperiores. Magnam dolorem
          perspiciatis expedita, tenetur aliquid ratione quod! Voluptate ipsam
          aspernatur accusantium enim porro ut atque soluta natus nesciunt nobis
          quisquam excepturi laudantium sunt labore architecto officia quas
          corrupti perferendis praesentium, iusto debitis harum quaerat rerum!
          Omnis delectus cumque commodi iusto veritatis architecto, dolore
          consequatur deleniti.
        </div>
        <div className="bg-red-100 w-96 p-10">
          <div class="flex justify-between ...">
            <div>
              <div className="avatar placeholder mr-2">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                  <span className="text-xs">AA</span>
                </div>
              </div>
            </div>
            <div className="w-96 mr-3">
              <form action="">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full max-w-xs"
                />
              </form>
            </div>
            <div className="ms-1">
              <button className="btn btn-secondary">Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
