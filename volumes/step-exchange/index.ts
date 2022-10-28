import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";

export default univ2Adapter({
  [CHAIN.STEP]: "https://graph.step.network/subgraphs/name/stepapp/stepex"
}, {
    factoriesName: "stepExFactories",
    dayData: "stepExDayData",
});
