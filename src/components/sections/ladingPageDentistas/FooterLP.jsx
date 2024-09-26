import LpContent from "../../../content/LpContentDentista";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";

export default function FooterLP() {
  return (
    <div>
      <SectionArea paddingTopAndBottom={false}>
        <SectionWrapper>
          <div className="w-full font-secondFont text-center py-[36px] opacity-100">
            <p>
              {LpContent.footer.copyrightLine}
              <br />
              <br />
              {LpContent.footer.disclaimer}
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
