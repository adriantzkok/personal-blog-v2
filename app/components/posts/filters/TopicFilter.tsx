import React, { useEffect, useState, useContext } from "react";
import { PostFilterComboBox } from "./PostFilterComboBox";
import { fetchTopics } from "@/app/api/dbqueries";
import _ from "lodash";
import { FilterContext } from "../PostArea";
import { ITopics } from "@/app/types/interface";

const TopicFilter = () => {
  const { setFilters } = useContext(FilterContext) || {};

  const [topics, setTopics] = useState<ITopics[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTopics = await fetchTopics();
        const uniqueTopics = _.uniqBy(fetchedTopics, "topic");
        setTopics(uniqueTopics);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <PostFilterComboBox
        // filters={filters}
        setFilters={setFilters}
        topics={topics}
        // className="w-1/3 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </>
  );
};

export default TopicFilter;
