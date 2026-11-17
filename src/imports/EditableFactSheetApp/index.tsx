import svgPaths from "./svg-uttuivv1od"
import imgContainer from "./e42587ddd4e5acdc0675039c91f07b1244f54a52.png"
import imgImageMosaicLogo from "./85bb0f90b6d6b1a7fe67b6f3f20787409c3dd744.png"

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.35px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Fact Sheet Editor
      </p>
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
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#7ec8e3] text-[11px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        A4 · Edit content fields, then export
      </p>
    </div>
  )
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[179.766px]"
      data-name="Container"
    >
      <Heading />
      <Paragraph />
    </div>
  )
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="13"
        preserveAspectRatio="none"
        viewBox="0 0 13 13"
        width="13"
      >
        <g id="Icon">
          <path
            d={svgPaths.p7bbbc00}
            id="Vector"
            stroke="#014A66"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.08333"
          />
        </g>
      </svg>
    </div>
  )
}

function Button() {
  return (
    <div
      className="bg-white content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[6px] self-stretch shrink-0"
      data-name="Button"
    >
      <Icon />
      <p
        className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#014a66] text-[11px] text-center whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Print / PDF
      </p>
    </div>
  )
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="13"
        preserveAspectRatio="none"
        viewBox="0 0 13 13"
        width="13"
      >
        <g id="Icon">
          <path
            d={svgPaths.p2c5a2680}
            id="Vector"
            stroke="#014A66"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.08333"
          />
        </g>
      </svg>
    </div>
  )
}

function Button1() {
  return (
    <div
      className="bg-[#f0be10] content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[6px] self-stretch shrink-0"
      data-name="Button"
    >
      <Icon1 />
      <p
        className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#014a66] text-[11px] text-center whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        PNG
      </p>
    </div>
  )
}

function Button2() {
  return (
    <div
      className="bg-[#0291c0] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[6px] self-stretch shrink-0"
      data-name="Button"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        JPG
      </p>
    </div>
  )
}

function Container1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0"
      data-name="Container"
    >
      <Button />
      <Button1 />
      <Button2 />
    </div>
  )
}

function Header() {
  return (
    <div
      className="bg-[#014a66] content-stretch flex items-center justify-between px-[24px] py-[12px] relative shrink-0 w-full"
      data-name="Header"
    >
      <Container />
      <Container1 />
    </div>
  )
}

function Heading1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#014a66] text-[10px] tracking-[1px] uppercase whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Content
      </p>
    </div>
  )
}

function Paragraph1() {
  return (
    <div
      className="content-stretch flex flex-col h-[17px] items-start pt-[2px] relative shrink-0 w-[239px]"
      data-name="Paragraph"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Design is locked — only text and photo can change.
      </p>
    </div>
  )
}

function Container3() {
  return (
    <div
      className="border-[#d5e6ef] border-b border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading1 />
      <Paragraph1 />
    </div>
  )
}

function Label() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Facility name
      </p>
    </div>
  )
}

function LabelMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label />
    </div>
  )
}

function TextInput() {
  return (
    <div
      className="border border-[#d5e6ef] border-solid content-stretch flex flex-col h-[30.5px] items-start justify-center overflow-clip px-[10px] py-[6px] relative rounded-[4px] shrink-0 w-[239px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1e1e1e] text-[11px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Villeta Port Terminal, Paraguay
      </p>
    </div>
  )
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin />
      <TextInput />
    </div>
  )
}

function Label1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Facility photo
      </p>
    </div>
  )
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g clipPath="url(#clip0_0_4)" id="Icon">
          <path
            d={svgPaths.p21fa0b80}
            id="Vector"
            stroke="#8EB5C8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

function Container9() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0"
      data-name="Container"
    >
      <Icon2 />
      <p
        className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[13.5px] relative shrink-0 text-[#8eb5c8] text-[9px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Using default photo
      </p>
    </div>
  )
}

function Container8() {
  return (
    <div
      className="content-stretch flex h-[78px] items-center justify-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Container9 />
    </div>
  )
}

function Container7() {
  return (
    <div
      className="bg-[#e4eef5] border border-[#d5e6ef] border-solid content-stretch flex flex-col h-[80px] items-start overflow-clip relative rounded-[4px] shrink-0 w-[239px]"
      data-name="Container"
    >
      <Container8 />
    </div>
  )
}

function ContainerMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container7 />
    </div>
  )
}

function Container6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Label1 />
      <ContainerMargin />
    </div>
  )
}

function Label2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Overview
      </p>
    </div>
  )
}

function LabelMargin1() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label2 />
    </div>
  )
}

function TextArea() {
  return (
    <div
      className="absolute border border-[#d5e6ef] border-solid h-[59.375px] left-0 rounded-[4px] top-0 w-[239px]"
      data-name="Text Area"
    />
  )
}

function Container11() {
  return (
    <div
      className="h-[65.375px] relative shrink-0 w-full"
      data-name="Container"
    >
      <TextArea />
    </div>
  )
}

function Container10() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin1 />
      <Container11 />
    </div>
  )
}

function Label3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Facility location
      </p>
    </div>
  )
}

function LabelMargin2() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label3 />
    </div>
  )
}

function TextArea1() {
  return (
    <div
      className="absolute border border-[#d5e6ef] border-solid h-[59.375px] left-0 rounded-[4px] top-0 w-[239px]"
      data-name="Text Area"
    />
  )
}

function Container13() {
  return (
    <div
      className="h-[65.375px] relative shrink-0 w-full"
      data-name="Container"
    >
      <TextArea1 />
    </div>
  )
}

function Container12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin2 />
      <Container13 />
    </div>
  )
}

function Label4() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Year operations began
      </p>
    </div>
  )
}

function LabelMargin3() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label4 />
    </div>
  )
}

function TextInput1() {
  return (
    <div
      className="border border-[#d5e6ef] border-solid content-stretch flex flex-col h-[30.5px] items-start justify-center overflow-clip px-[10px] py-[6px] relative rounded-[4px] shrink-0 w-[239px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1e1e1e] text-[11px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        2014
      </p>
    </div>
  )
}

function Container14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin3 />
      <TextInput1 />
    </div>
  )
}

function Label5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Activities
      </p>
    </div>
  )
}

function LabelMargin4() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label5 />
    </div>
  )
}

function TextArea2() {
  return (
    <div
      className="absolute border border-[#d5e6ef] border-solid h-[59.375px] left-0 rounded-[4px] top-0 w-[239px]"
      data-name="Text Area"
    />
  )
}

function Container16() {
  return (
    <div
      className="h-[65.375px] relative shrink-0 w-full"
      data-name="Container"
    >
      <TextArea2 />
    </div>
  )
}

function Container15() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin4 />
      <Container16 />
    </div>
  )
}

function Label6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Capacity
      </p>
    </div>
  )
}

function LabelMargin5() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label6 />
    </div>
  )
}

function TextInput2() {
  return (
    <div
      className="border border-[#d5e6ef] border-solid content-stretch flex flex-col h-[30.5px] items-start justify-center overflow-clip px-[10px] py-[6px] relative rounded-[4px] shrink-0 w-[239px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1e1e1e] text-[11px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        500k tons of fertilizer a year
      </p>
    </div>
  )
}

function Container17() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin5 />
      <TextInput2 />
    </div>
  )
}

function Label7() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Average production (annual)
      </p>
    </div>
  )
}

function LabelMargin6() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label7 />
    </div>
  )
}

function TextInput3() {
  return (
    <div
      className="border border-[#d5e6ef] border-solid content-stretch flex flex-col h-[30.5px] items-start justify-center overflow-clip px-[10px] py-[6px] relative rounded-[4px] shrink-0 w-[239px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1e1e1e] text-[11px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        250k tons of fertilizer a year
      </p>
    </div>
  )
}

function Container18() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin6 />
      <TextInput3 />
    </div>
  )
}

function Label8() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Products
      </p>
    </div>
  )
}

function LabelMargin7() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label8 />
    </div>
  )
}

function TextInput4() {
  return (
    <div
      className="border border-[#d5e6ef] border-solid content-stretch flex flex-col h-[30.5px] items-start justify-center overflow-clip px-[10px] py-[6px] relative rounded-[4px] shrink-0 w-[239px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1e1e1e] text-[11px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Fertilizer (NPK blend)
      </p>
    </div>
  )
}

function Container19() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin7 />
      <TextInput4 />
    </div>
  )
}

function Label9() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Finished product destination
      </p>
    </div>
  )
}

function LabelMargin8() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label9 />
    </div>
  )
}

function TextInput5() {
  return (
    <div
      className="border border-[#d5e6ef] border-solid content-stretch flex flex-col h-[30.5px] items-start justify-center overflow-clip px-[10px] py-[6px] relative rounded-[4px] shrink-0 w-[239px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1e1e1e] text-[11px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >{`Paraguay's domestic market`}</p>
    </div>
  )
}

function Container20() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin8 />
      <TextInput5 />
    </div>
  )
}

function Label10() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Mode of transportation
      </p>
    </div>
  )
}

function LabelMargin9() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label10 />
    </div>
  )
}

function TextArea3() {
  return (
    <div
      className="absolute border border-[#d5e6ef] border-solid h-[59.375px] left-0 rounded-[4px] top-0 w-[239px]"
      data-name="Text Area"
    />
  )
}

function Container22() {
  return (
    <div
      className="h-[65.375px] relative shrink-0 w-full"
      data-name="Container"
    >
      <TextArea3 />
    </div>
  )
}

function Container21() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin9 />
      <Container22 />
    </div>
  )
}

function Label11() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Employees
      </p>
    </div>
  )
}

function LabelMargin10() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label11 />
    </div>
  )
}

function TextInput6() {
  return (
    <div
      className="border border-[#d5e6ef] border-solid content-stretch flex flex-col h-[30.5px] items-start justify-center overflow-clip px-[10px] py-[6px] relative rounded-[4px] shrink-0 w-[239px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1e1e1e] text-[11px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        50–100 direct employees
      </p>
    </div>
  )
}

function Container23() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin10 />
      <TextInput6 />
    </div>
  )
}

function Label12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.25px] relative shrink-0 text-[#0291c0] text-[9.5px] tracking-[0.19px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Key highlight
      </p>
    </div>
  )
}

function LabelMargin11() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"
      data-name="Label:margin"
    >
      <Label12 />
    </div>
  )
}

function TextArea4() {
  return (
    <div
      className="absolute border border-[#d5e6ef] border-solid h-[59.375px] left-0 rounded-[4px] top-0 w-[239px]"
      data-name="Text Area"
    />
  )
}

function Container25() {
  return (
    <div
      className="h-[65.375px] relative shrink-0 w-full"
      data-name="Container"
    >
      <TextArea4 />
    </div>
  )
}

function Container24() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin11 />
      <Container25 />
    </div>
  )
}

function Container4() {
  return (
    <div
      className="content-stretch flex flex-[1025.625_0_0] flex-col gap-[12px] items-start min-h-px overflow-clip px-[16px] py-[12px] relative w-full"
      data-name="Container"
    >
      <Container5 />
      <Container6 />
      <Container10 />
      <Container12 />
      <Container14 />
      <Container15 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container23 />
      <Container24 />
    </div>
  )
}

function Button3() {
  return (
    <div
      className="absolute h-[15px] left-[16px] top-[17px] w-[78.156px]"
      data-name="Button"
    >
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[15px] left-[39.5px] text-[#99a1af] text-[10px] text-center top-0 whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Reset to defaults
      </p>
    </div>
  )
}

function Container26() {
  return (
    <div
      className="border-[#d5e6ef] border-solid border-t h-[45px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Button3 />
    </div>
  )
}

function Sidebar() {
  return (
    <div
      className="bg-white border-[#d5e6ef] border-r border-solid content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[272px]"
      data-name="Sidebar"
    >
      <Container3 />
      <Container4 />
      <Container26 />
    </div>
  )
}

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

function Container29() {
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
        Overview
      </p>
    </div>
  )
}

function Paragraph3() {
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

function Container32() {
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

function Paragraph4() {
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

function Paragraph5() {
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

function Container33() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Container"
    >
      <Paragraph4 />
      <Paragraph5 />
    </div>
  )
}

function Container31() {
  return (
    <div
      className="content-stretch flex gap-[23.081px] items-start overflow-clip px-[52px] py-[6px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container32 />
      <Container33 />
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
        Facility location
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
      >{`Ruta Alberdi, km 27, Zona Suribi'y, Villeta – Paraguay`}</p>
    </div>
  )
}

function Container35() {
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
        Year operations began
      </p>
    </div>
  )
}

function Paragraph9() {
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

function Container36() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph8 />
      <Paragraph9 />
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
        Activities
      </p>
    </div>
  )
}

function Paragraph11() {
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
      <Paragraph11 />
    </div>
  )
}

function Container37() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph10 />
      <ParagraphMargin />
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
        Capacity
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
        500k tons of fertilizer a year
      </p>
    </div>
  )
}

function Container38() {
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
        Average production (annual)
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
        250k tons of fertilizer a year
      </p>
    </div>
  )
}

function Container39() {
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
        Products
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
      >
        Fertilizer (NPK blend)
      </p>
    </div>
  )
}

function Container40() {
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
        Finished product destination
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
      >{`Paraguay's domestic market`}</p>
    </div>
  )
}

function Container41() {
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
        Mode of transportation
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
        The products are mainly transported by road.
      </p>
    </div>
  )
}

function Container42() {
  return (
    <div
      className="border-[#e8f0f5] border-b-[0.962px] border-solid content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph20 />
      <Paragraph21 />
    </div>
  )
}

function Paragraph22() {
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

function Paragraph23() {
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

function Container43() {
  return (
    <div
      className="content-stretch flex flex-col items-start py-[8.655px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph22 />
      <Paragraph23 />
    </div>
  )
}

function Container34() {
  return (
    <div
      className="bg-white border-[#ddeaf3] border-r-[0.962px] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip pb-[6px] pl-[52px] pr-[38.468px] relative w-full"
      data-name="Container"
    >
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
    </div>
  )
}

function Container30() {
  return (
    <div
      className="content-stretch flex flex-col h-[869px] items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <PlaceholderForFactSheet />
      <Container31 />
      <Container34 />
    </div>
  )
}

function FactSheet() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[1080px] items-start justify-end overflow-clip relative shrink-0 w-[763.598px]"
      data-name="FactSheet"
    >
      <Container29 />
      <Container30 />
    </div>
  )
}

function Container28() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-end left-0 shadow-[0px_5.77px_38.468px_0px_rgba(1,74,102,0.22)] top-0"
      data-name="Container"
    >
      <FactSheet />
    </div>
  )
}

function Container27() {
  return (
    <div
      className="h-[1080px] relative shrink-0 w-[763.594px]"
      data-name="Container"
    >
      <Container28 />
    </div>
  )
}

function Container44() {
  return (
    <div
      className="absolute bg-[rgba(1,74,102,0.7)] content-stretch flex flex-col items-start left-[852.83px] px-[10px] py-[4px] rounded-[33554400px] top-[795.5px]"
      data-name="Container"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[10px] text-white whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        A4 · 210 × 297 mm
      </p>
    </div>
  )
}

function MainContent() {
  return (
    <div
      className="bg-[#dce8f0] content-stretch flex flex-[976_0_0] h-full items-center justify-center min-w-px overflow-clip relative"
      data-name="Main Content"
    >
      <Container27 />
      <Container44 />
    </div>
  )
}

function Container2() {
  return (
    <div
      className="content-stretch flex flex-[1127.625_0_0] items-start min-h-px overflow-clip relative w-full"
      data-name="Container"
    >
      <Sidebar />
      <MainContent />
    </div>
  )
}

function App() {
  return (
    <div
      className="bg-[#f0f4f8] content-stretch flex flex-col h-[1188.125px] items-start relative shrink-0 w-full"
      data-name="App"
    >
      <Header />
      <Container2 />
    </div>
  )
}

export default function EditableFactSheetApp() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Editable Fact Sheet App"
    >
      <App />
    </div>
  )
}
