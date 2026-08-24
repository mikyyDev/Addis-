import { useMemo } from "react";

import { useStatStore } from "../../../store/stat.store";
import {
  buildActivity,
  countSince,
  filterByPeriod,
  getPeriodLabel,
} from "../../../utils/statistics";

import StatSection from "../StatSection/StatSection";

import {
  ActivityStats,
  ActivityStat,
  ActivityStatValue,
  ActivityStatLabel,
  ActivityStatDot,
  ChartContainer,
  ChartBars,
  BarColumn,
  ActivityBar,
  ChartAxis,
  AxisLabel,
} from "./ImportActivity.styles";

const ImportActivity = () => {
  const { songs, period } = useStatStore();

  const filteredSongs = useMemo(
    () => filterByPeriod(songs, period),
    [songs, period],
  );

  const activity = useMemo(
    () => buildActivity(filteredSongs, period),
    [filteredSongs, period],
  );

  const maxCount = useMemo(
    () => Math.max(1, ...activity.map((bucket) => bucket.count)),
    [activity],
  );

  const thisWeek = useMemo(() => countSince(songs, 7), [songs]);
  const thisMonth = useMemo(() => countSince(songs, 30), [songs]);

  // Get first and last labels for axis
  const firstLabel = activity[0]?.label ?? "";
  const lastLabel = activity[activity.length - 1]?.label ?? "";

  return (
    <StatSection
      title="Import Activity"
      count={`${filteredSongs.length} ${
        filteredSongs.length === 1 ? "song" : "songs"
      } in ${getPeriodLabel(period).toLowerCase()}`}
    >
      <ActivityStats>
        <ActivityStat>
          <ActivityStatValue>{thisWeek}</ActivityStatValue>
          <ActivityStatLabel>this week</ActivityStatLabel>
        </ActivityStat>

        <ActivityStatDot />

        <ActivityStat>
          <ActivityStatValue>{thisMonth}</ActivityStatValue>
          <ActivityStatLabel>this month</ActivityStatLabel>
        </ActivityStat>
      </ActivityStats>

      <ChartContainer>
        <ChartBars>
          {activity.map((bucket, index) => (
            <BarColumn
              key={index}
              title={`${bucket.label}: ${bucket.count} song${
                bucket.count === 1 ? "" : "s"
              }`}
            >
              <ActivityBar
                height={(bucket.count / maxCount) * 100}
                $isToday={bucket.isToday}
              />
            </BarColumn>
          ))}
        </ChartBars>

        <ChartAxis>
          <AxisLabel>{firstLabel}</AxisLabel>
          <AxisLabel>{lastLabel}</AxisLabel>
        </ChartAxis>
      </ChartContainer>
    </StatSection>
  );
};

export default ImportActivity;
