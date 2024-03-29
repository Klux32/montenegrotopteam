import React from "react";
import { ContainerFluid, ContainerWrap } from "../components/Containers";
import Heading from "../components/Heading";

import { schedule, scheduleTable, scheduleTableMob } from "../data/data";

const ScheduleScreen = () => {
  const windowWidth = window.innerWidth;

  return (
    <ContainerWrap id="schedule" style="schedule section">
      <div className="d-flex flex-column justify-content-center">
        <div className="clear-top">
          <Heading title="Raspored treninga" style="my-5" />
        </div>

        <div className="row shadow-lg">
          {windowWidth >= 992 ? (
            <table className="table m-0 table-dark table-striped-column text-center">
              <thead>
                {scheduleTable
                  ? scheduleTable.map((item, key) => (
                      <tr key={key}>
                        <th scope="col">{item.tHead.title}</th>
                        <th scope="col">{item.tHead.classOne}</th>
                        <th scope="col">{item.tHead.classTwo}</th>
                        <th scope="col">{item.tHead.classThree}</th>
                        <th scope="col">{item.tHead.classFour}</th>
                      </tr>
                    ))
                  : null}
              </thead>
              <tbody className="table-group-divider">
                {scheduleTable
                  ? scheduleTable.map((item, key) =>
                      item.tBody.map((bitem, key) => (
                        <tr key={key}>
                          <th scope="row">{bitem.title.slice(0, 3)}</th>
                          <td>{bitem.classOne}</td>
                          <td>{bitem.classTwo}</td>
                          <td>{bitem.classThree}</td>
                          <td>{bitem.classFour}</td>
                        </tr>
                      ))
                    )
                  : null}
              </tbody>
            </table>
          ) : (
            <table className="table m-0 table-dark table-striped-column text-center">
              <thead>
                {scheduleTableMob
                  ? scheduleTableMob.map((item, key) => (
                      <tr key={key}>
                        <th scope="col">{item.tHead.title}</th>
                        <th scope="col">{item.tHead.classOne}</th>
                        <th scope="col">{item.tHead.classTwo}</th>
                      </tr>
                    ))
                  : null}
              </thead>
              <tbody className="table-group-divider">
                {scheduleTableMob
                  ? scheduleTableMob.map((item, key) =>
                      item.tBody.map((bitem, key) => (
                        <tr key={key}>
                          <th scope="row">{bitem.title}</th>
                          <td>{bitem.classOne}</td>
                          <td>{bitem.classTwo}</td>
                        </tr>
                      ))
                    )
                  : null}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </ContainerWrap>
    // </ContainerFluid>
  );
};

export default ScheduleScreen;
