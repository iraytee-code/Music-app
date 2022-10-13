import React, { Fragment } from "react";
import { MusicCard } from "../../components";
import NewRelease_img1 from "../../assets/images/Rectangle 14.png";
import NewRelease_img2 from "../../assets/images/Rectangle 15.png";
import NewRelease_img3 from "../../assets/images/Rectangle 16.png";
import NewRelease_img4 from "../../assets/images/Rectangle 17.png";
import NewRelease_img5 from "../../assets/images/Rectangle 18.png";
import NewRelease_img6 from "../../assets/images/Rectangle 19.png";
import NewRelease_img7 from "../../assets/images/Rectangle 20.png";

const PopularRelease = () => {
  return (
    <Fragment>
      <div className="mb-6">
        <div className="text-white text-[24px] p-3">Popular In Your Area</div>;
        <div className="overflow-x-scroll scrollbar-hide">
          <div className="grid grid-flow-col auto-cols-max gap-10">
            <MusicCard
              musicImage={NewRelease_img1}
              altMusicImage={"new release img"}
            />
            <MusicCard
              musicImage={NewRelease_img2}
              altMusicImage={"new release img"}
            />
            <MusicCard
              musicImage={NewRelease_img3}
              altMusicImage={"new release img"}
            />
            <MusicCard
              musicImage={NewRelease_img4}
              altMusicImage={"new release img"}
            />
            <MusicCard
              musicImage={NewRelease_img5}
              altMusicImage={"new release img"}
            />
            <MusicCard
              musicImage={NewRelease_img6}
              altMusicImage={"new release img"}
            />
            <MusicCard
              musicImage={NewRelease_img7}
              altMusicImage={"new release img"}
            />
            <MusicCard
              musicImage={NewRelease_img1}
              altMusicImage={"new release img"}
            />
            <MusicCard
              musicImage={NewRelease_img2}
              altMusicImage={"new release img"}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PopularRelease;
