import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import useFilter from "../../../hooks/useFilter";
import { useFilterContext } from "../../../filterContext/FilterContext";
import Card from "./Card";

function PaginatedItems() {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const { filteredData } = useFilter();
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  const { searchParams } = useFilterContext();

  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const [loading, setLoading] = useState(false);
  const currentItems = filteredData?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData?.length / itemsPerPage);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [searchParams, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul className="flex flex-col gap-12">
        {currentItems?.map((estate) => {
          return (
            <li key={estate.id} className="">
              <Card {...estate} loading={loading} />
            </li>
          );
        })}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="flex gap-4"
      />
    </>
  );
}

export default PaginatedItems;
