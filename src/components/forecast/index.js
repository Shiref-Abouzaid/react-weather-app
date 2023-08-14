import "./index.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const ForeCast = (data) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[index]} </label>
                  <label className="description">
                    {item.weather[0].description}{" "}
                  </label>
                  <label className="min-max">
                    {" "}
                    {Math.round(item.main.temp_min)}&#8451; /{" "}
                    {Math.round(item.main.temp_max)}&#8451;{" "}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-item">
                  <label>Humidity</label>
                  <label>{Math.round(item.main.feels_like)}&#8451;</label>
                </div>
                <div className="daily-details-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>

                <div className="daily-details-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>

                <div className="daily-details-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}</label>
                </div>

                <div className="daily-details-item">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>

                <div className="daily-details-item">
                  <label>Sea level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForeCast;
