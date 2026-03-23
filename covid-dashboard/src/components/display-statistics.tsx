import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react"; // 👀
import type { CovidData } from "@/types/covid"; // 👀

// 👀 The three statistics we want to show as cards
const STATISTICS: (keyof CovidData)[] = ["confirmed", "active", "recovered"];

const DisplayStatistics = () => {
  // 👀 State for the covid data (hardcoded for now)
  const [covidData] = useState<CovidData>({
    countryName: "United States",
    countryCode: "us",
    countryFlag: "https://disease.sh/assets/img/flags/us.png",
    confirmed: 111820082,
    active: 786167,
    recovered: 109814428,
  });

  return (
    <div className="flex w-full justify-between flex-col sm:flex-row gap-5">
      {/* 👀 Map over STATISTICS instead of repeating cards */}
      {STATISTICS.map((statistic) => (
        <Card className="w-full" key={statistic}>
          <CardHeader>
            <CardTitle className="capitalize">{statistic}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-end items-center gap-2">
            <Avatar>
              <AvatarImage src={covidData.countryFlag} />
              <AvatarFallback>
                {covidData.countryCode.toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-2xl">
              {(covidData[statistic] as number).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DisplayStatistics;
