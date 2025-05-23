import React, { useEffect, useState } from "react";
import { TopicFilterComboBox } from "@/src/app/components/posts/filters/TopicFilterComboBox";
import { fetchTopics } from "@/src/app/api/dbqueries";
import _ from "lodash";
import { ITopics } from "@/lib/types/interface";

const TopicFilter = () => {
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
      <TopicFilterComboBox
        // filters={filters}
        // setFilters={setFilters}
        topics={topics}
        // className="w-1/3 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </>
  );
};

export default TopicFilter;
