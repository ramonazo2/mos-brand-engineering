import imgContainer from "./e42587ddd4e5acdc0675039c91f07b1244f54a52.png"
import imgImageMosaicLogo from "./85bb0f90b6d6b1a7fe67b6f3f20787409c3dd744.png"

function ImageMosaicLogo() {
  return (
    <div
      className="absolute h-[99.056px] left-[52.89px] top-0 w-[106.75px]"
      data-name="Image (Mosaic logo)"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
        src={imgImageMosaicLogo}
      />
    </div>
  )
}

function Container2() {
  return (
    <div
      className="absolute h-[211.576px] left-0 overflow-clip top-0 w-[763.598px]"
      data-name="Container"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute max-w-none object-cover size-full"
          src={imgContainer}
        />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0" />
      </div>
      <ImageMosaicLogo />
    </div>
  )
}

function PlaceholderForFactSheet() {
  return (
    <div
      className="content-stretch flex flex-col items-start px-[52px] py-[24px] relative shrink-0 w-full"
      data-name="Placeholder for FactSheet"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[52px] justify-center leading-[0] relative shrink-0 text-[48px] text-black tracking-[-2.4px] w-[464px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Paraguay</p>
      </div>
    </div>
  )
}

function Paragraph() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f0be10] text-[24px] tracking-[-1.2px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Overview
      </p>
    </div>
  )
}

function Paragraph1() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[7.694px] relative shrink-0 w-[250.045px]"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#1e1e1e] text-[14px] w-[250.045px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >{`The company's Paraguayan operations include an administrative office in Asunción, Paraguay's capital and a production site with a port terminal 26 km from the city of Villeta.`}</p>
    </div>
  )
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Container"
    >
      <Paragraph />
      <Paragraph1 />
    </div>
  )
}

function Paragraph2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f0be10] text-[24px] tracking-[-1.2px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Key highlight
      </p>
    </div>
  )
}

function Paragraph3() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[7.694px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#1e1e1e] text-[14px] w-[250.045px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        A compact facility that centralizes port operations for raw material
        import, fertilizer blending and bagging of the final products.
      </p>
    </div>
  )
}

function Container6() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Container"
    >
      <Paragraph2 />
      <Paragraph3 />
    </div>
  )
}

function Container4() {
  return (
    <div
      className="content-stretch flex gap-[23.081px] items-start overflow-clip px-[52px] py-[6px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container5 />
      <Container6 />
    </div>
  )
}

function Paragraph4() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.966px] relative shrink-0 text-[#3c3c3c] text-[17.311px] tracking-[-0.5193px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Facility location
      </p>
    </div>
  )
}

function Paragraph5() {
  return (
    <div
      className="content-stretch flex flex-col h-[21.885px] items-start pt-[2.885px] relative shrink-0 w-[374.105px]"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.128px] relative shrink-0 text-[#1e1e1e] text-[12.502px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >{`Ruta Alberdi, km 27, Zona Suribi'y, Villeta – Paraguay`}</p>
    </div>
  )
}

function Container8() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph4 />
      <Paragraph5 />
    </div>
  )
}

function Paragraph6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.966px] relative shrink-0 text-[#3c3c3c] text-[17.311px] tracking-[-0.5193px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Year operations began
      </p>
    </div>
  )
}

function Paragraph7() {
  return (
    <div
      className="content-stretch flex flex-col h-[21.885px] items-start pt-[2.885px] relative shrink-0 w-[374.105px]"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.128px] relative shrink-0 text-[#1e1e1e] text-[12.502px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        2014
      </p>
    </div>
  )
}

function Container9() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph6 />
      <Paragraph7 />
    </div>
  )
}

function Paragraph8() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.966px] relative shrink-0 text-[#3c3c3c] text-[17.311px] tracking-[-0.5193px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Activities
      </p>
    </div>
  )
}

function Paragraph9() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.128px] relative shrink-0 text-[#1e1e1e] text-[12.502px] w-[374.105px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Administrative, in addition to port operations involving unloading raw
        materials and fertilizer blending and bagging.
      </p>
    </div>
  )
}

function ParagraphMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[2.885px] relative shrink-0 w-full"
      data-name="Paragraph:margin"
    >
      <Paragraph9 />
    </div>
  )
}

function Container10() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph8 />
      <ParagraphMargin />
    </div>
  )
}

function Paragraph10() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.966px] relative shrink-0 text-[#3c3c3c] text-[17.311px] tracking-[-0.5193px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Capacity
      </p>
    </div>
  )
}

function Paragraph11() {
  return (
    <div
      className="content-stretch flex flex-col h-[21.885px] items-start pt-[2.885px] relative shrink-0 w-[374.105px]"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.128px] relative shrink-0 text-[#1e1e1e] text-[12.502px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        500k tons of fertilizer a year
      </p>
    </div>
  )
}

function Container11() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph10 />
      <Paragraph11 />
    </div>
  )
}

function Paragraph12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.966px] relative shrink-0 text-[#3c3c3c] text-[17.311px] tracking-[-0.5193px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Average production (annual)
      </p>
    </div>
  )
}

function Paragraph13() {
  return (
    <div
      className="content-stretch flex flex-col h-[21.885px] items-start pt-[2.885px] relative shrink-0 w-[374.105px]"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.128px] relative shrink-0 text-[#1e1e1e] text-[12.502px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        250k tons of fertilizer a year
      </p>
    </div>
  )
}

function Container12() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph12 />
      <Paragraph13 />
    </div>
  )
}

function Paragraph14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.966px] relative shrink-0 text-[#3c3c3c] text-[17.311px] tracking-[-0.5193px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Products
      </p>
    </div>
  )
}

function Paragraph15() {
  return (
    <div
      className="content-stretch flex flex-col h-[21.885px] items-start pt-[2.885px] relative shrink-0 w-[374.105px]"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.128px] relative shrink-0 text-[#1e1e1e] text-[12.502px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Fertilizer (NPK blend)
      </p>
    </div>
  )
}

function Container13() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph14 />
      <Paragraph15 />
    </div>
  )
}

function Paragraph16() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.966px] relative shrink-0 text-[#3c3c3c] text-[17.311px] tracking-[-0.5193px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Finished product destination
      </p>
    </div>
  )
}

function Paragraph17() {
  return (
    <div
      className="content-stretch flex flex-col h-[21.885px] items-start pt-[2.885px] relative shrink-0 w-[374.105px]"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.128px] relative shrink-0 text-[#1e1e1e] text-[12.502px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >{`Paraguay's domestic market`}</p>
    </div>
  )
}

function Container14() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph16 />
      <Paragraph17 />
    </div>
  )
}

function Paragraph18() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.966px] relative shrink-0 text-[#3c3c3c] text-[17.311px] tracking-[-0.5193px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Mode of transportation
      </p>
    </div>
  )
}

function Paragraph19() {
  return (
    <div
      className="content-stretch flex flex-col h-[21.885px] items-start pt-[2.885px] relative shrink-0 w-[374.105px]"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.128px] relative shrink-0 text-[#1e1e1e] text-[12.502px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        The products are mainly transported by road.
      </p>
    </div>
  )
}

function Container15() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph18 />
      <Paragraph19 />
    </div>
  )
}

function Paragraph20() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.966px] relative shrink-0 text-[#3c3c3c] text-[17.311px] tracking-[-0.5193px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Employees
      </p>
    </div>
  )
}

function Paragraph21() {
  return (
    <div
      className="content-stretch flex flex-col h-[21.885px] items-start pt-[2.885px] relative shrink-0 w-[374.105px]"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.128px] relative shrink-0 text-[#1e1e1e] text-[12.502px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        50–100 direct employees
      </p>
    </div>
  )
}

function Container16() {
  return (
    <div
      className="content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph20 />
      <Paragraph21 />
    </div>
  )
}

function Container7() {
  return (
    <div
      className="bg-white border-[#ddeaf3] border-r-[0.962px] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip pb-[6px] pl-[52px] pr-[38.468px] relative w-full"
      data-name="Container"
    >
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  )
}

function Container3() {
  return (
    <div
      className="content-stretch flex flex-col h-[869px] items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <PlaceholderForFactSheet />
      <Container4 />
      <Container7 />
    </div>
  )
}

function FactSheet() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[1080px] items-start justify-end overflow-clip relative shrink-0 w-[763.598px]"
      data-name="FactSheet"
    >
      <Container2 />
      <Container3 />
    </div>
  )
}

function Container1() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-end left-0 shadow-[0px_5.77px_38.468px_0px_rgba(1,74,102,0.22)] top-0"
      data-name="Container"
    >
      <FactSheet />
    </div>
  )
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
    </div>
  )
}
