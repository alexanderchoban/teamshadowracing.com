import React from "react";
import { Flag, Cog, Graph, Video } from "../../components/Icons";
import Card from "../../components/Card";

function IconBanner() {
  return (
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div className="p-12 grid grid-rows-4 sm:grid-rows-4 md:grid-rows-2 lg:grid-rows-1 xl:grid-rows:5 grid-flow-col gap-4">
        <Card title="Race Cars" icon={Flag}>
          <p>
            Whether it's on the virtual track or the real one, we liketo go
            fast.
          </p>
        </Card>
        <Card title="Work on Cars" icon={Cog}>
          <p>
            Changing oil, upgrading brakes, chaning timing belts, we love it
            all.
          </p>
        </Card>
        <Card title="Use Data" icon={Graph}>
          <p>
            We like to use data to go fast. We analyze telemetry and monitor the
            slip angels.
          </p>
        </Card>
        <Card title="Entertain" icon={Video}>
          <p>We want to share our fun, that's why we post on YouTube!</p>
        </Card>
      </div>
    </div>
  );
}

export default IconBanner;
