import React, { useEffect, useState } from "react";
import "./css/Filter.css";
import FilterModal from "./FilterModal";

export default function Filter({ id, communities = [], setterCommunities }) {
  const [listAreas, setListAreas] = useState([]);
  const [listComm, setListComm] = useState([]);

  const [area, setArea] = useState("all areas");
  const [community, setCommunity] = useState("all communities");

  const [search, setSearch] = useState("");

  const [IsModal, setIsModal] = useState(false);

  const isModel = () => {
    if (IsModal != true) {
      setIsModal(true);
    }
  };

  // useEffect(()=>{
  //     if(areas.length>0 && Array.isArray(areas)){
  //         setListAreas(()=>{return areas})
  //     }
  // },[areas])

  useEffect(() => {
    if (communities.length > 0 && Array.isArray(communities)) {
      let mapped = communities.map((item) => {
        return slicedText(item).toLowerCase();
      });
      setListComm(() => {
        return mapped;
      });
    }
  }, [communities]);

  function slicedText(text) {
    let textin = String(text);
    const firstComma = textin.indexOf(",");
    const secondComma = textin.indexOf(",", firstComma + 1);
    return textin.slice(firstComma + 2, secondComma);
  }

  const onSearch = (event) => {
    const written = event.target.value;
    setSearch(written);
  };

  useEffect(() => {
    let filtered = [];
    filtered = listComm.filter((item) => {
      return item.includes(search.toLowerCase());
    });

    if (filtered.length > 0) {
      setListComm(() => {
        return filtered;
      });
    }

    if (search === "") {
      let mapped = communities.map((item) => {
        return slicedText(item).toLowerCase();
      });
      setListComm(() => {
        return mapped;
      });
    }
  }, [search]);

  // const onChecked= (event)=>{

  //     if(area === event.target.value){
  //         setArea(()=>{
  //             return 'all areas'
  //         })
  //     }else{
  //         setArea(()=>{
  //             return event.target.value
  //         })
  //     }
  // }

  const commSetter = (event) => {
    if (community === event.target.value) {
      setCommunity(() => {
        return "all communities";
      });
    } else {
      setCommunity(() => {
        return event.target.value;
      });
    }
  };

  useEffect(() => {
    setterCommunities(community);
  }, [IsModal]);

  return (
    <>
      {IsModal && (
        <FilterModal IsModal={IsModal} setIsModal={setIsModal}>
          {/* <div id='modal-typediv'>
                        <span>
                            <span className='modal-select-title'>Type</span>
                            <span className='modal-select-subtitle'>Choose the type of build</span>
                        </span>
                        <div id='selection-div'>
                            {
                                listAreas.map((item,index)=>{
                                    return (
                                        <label key={index} className={area === item?'active-label radiolabels':'radiolabels'}>
                                            {item}
                                            <input className='radioinputs' type='checkbox' value={item} checked={area === item} onChange={onChecked} hidden/>
                                            <img id='radio-checked' src='/assets/filter-checked.png' width='13px' height='13px'hidden/>
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div> */}
          <div id="modal-areadiv">
            <span>
              <span className="modal-select-title">Area</span>
              <span className="modal-select-subtitle">Choose the area</span>
            </span>
            <div id="input-div">
              <input
                id="modal-inputbar"
                type="text"
                value={search}
                placeholder="Search for Area"
                onChange={onSearch}
              />
            </div>
            <div id="commlist">
              {listComm.map((item, index) => {
                return (
                  <label
                    className={
                      community === item
                        ? "active-commlist-label commlist-label"
                        : "commlist-label"
                    }
                    key={index}
                  >
                    {item}
                    <input
                      type="checkbox"
                      value={item}
                      checked={community === item}
                      onChange={commSetter}
                      hidden
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </FilterModal>
      )}

      <div className={id}>
        <div id="filter-outer-flex">
          <div id="filter-outer">
            <div id="filter-inner">
              <div id="filter-button-div">
                <button id="filter-button" onClick={isModel}>
                  <img
                    id="filter-icon"
                    src="/assets/filter-logo.png"
                    width="19.5px"
                    height="19.5px"
                  />
                  <span id="filter-text">Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
