import Heading from "@/components/ui/heading";
import FeaturesCard from "@/components/FeaturesCard";
import { indieHackerFeatures } from "@/configs/config";
const Features = () => {
  return (
    <section className="p-2" id="features">
      <Heading
        title="What do we offer?"
        description="We offer a wide range of features to help you grow your business."
      />
      <FeaturesCard reverse={true} data={indieHackerFeatures[0]} />
      <FeaturesCard reverse={false} data={indieHackerFeatures[1]} />
    </section>
  );
};

export default Features;
