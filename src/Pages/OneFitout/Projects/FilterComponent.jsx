import React, { useCallback, useState } from "react";
import Select from "react-dropdown-select";
import "../Projects/css/FilterComponent.css"; // Import the new CSS file

const FilterComponent = ({ title, options }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const customContentRenderer = useCallback(
    ({ props, state }) => (
      <div style={{ cursor: "pointer" }}>
        {state.values.length > 0
          ? state.values.map((value) => value.label).join(", ")
          : "Select"}
      </div>
    ),
    []
  );

  const customDropdownRenderer = useCallback(({ props, state, methods }) => {
    const regexp = new RegExp(state.search, "i");

    return (
      <div>
        <div className="items">
          {props.options
            .filter((item) =>
              regexp.test(item[props.searchBy] || item[props.labelField])
            )
            .map((option) => (
              <div
                className={`item ${option.disabled ? "disabled" : ""}`}
                key={option[props.valueField]}
                onClick={option.disabled ? null : () => methods.addItem(option)}
              >
                <input
                  style={{ background: "red !important" }}
                  type="checkbox"
                  onChange={() =>
                    option.disabled ? undefined : methods.addItem(option)
                  }
                  checked={state.values.includes(option)}
                />
                <div className="item-label">{option[props.labelField]}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }, []);

  return (
    <div>
      <Select
        className="styled-select"
        placeholder="Select"
        multi
        contentRenderer={customContentRenderer}
        dropdownRenderer={customDropdownRenderer}
        onChange={(value) => {
          console.log(
            `%c > onChange ${title} `,
            "background: #555; color: tomato",
            value
          );
          setSelectedValues(value);
        }}
        options={options}
        values={selectedValues}
        labelField="label"
        valueField="value"
        searchBy="label"
      />
    </div>
  );
};

export default FilterComponent;
