import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import type { CovidData } from "@/types/covid";
import { fetchCovidData } from "@/services/disease";

const STATISTICS: (keyof CovidData)[] = ["confirmed", "active", "recovered"];

// 👀 Define the props this component accepts
type DisplayStatisticsProps = {
  countryCode: string;
};

// 👀 Destructure countryCode from props
const DisplayStatistics = ({ countryCode }: DisplayStatisticsProps) => {
  const [covidData, setCovidData] = useState<CovidData | null>(null);

  useEffect(() => {
    fetchCovidData(countryCode).then((data) => setCovidData(data));
  }, [countryCode]); // 👀 Re-fetch whenever countryCode changes

  return (
    <div className="flex w-full justify-between flex-col sm:flex-row gap-5">
      {STATISTICS.map((statistic) => (
        <Card className="w-full" key={statistic}>
          <CardHeader>
            <CardTitle className="capitalize">{statistic}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-end items-center gap-2">
            <Avatar>
              <AvatarImage src={covidData?.countryFlag} />
              <AvatarFallback>
                {covidData?.countryCode.toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-2xl">
              {covidData?.[statistic]?.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DisplayStatistics;
