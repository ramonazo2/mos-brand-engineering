import svgPaths from "./svg-04e27x1345"

function Paragraph() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="[word-break:break-word] font-['Open_Sans:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#1c1c1e] text-[14px] whitespace-nowrap">
        Content Fields
      </p>
    </div>
  )
}

function Container() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start pb-[10px] pt-[14px] px-[20px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph />
    </div>
  )
}

function Label() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Facility name
      </p>
    </div>
  )
}

function TextInput() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[33.1px] items-start justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0 w-[227.2px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c1c1e] text-[13px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Villeta Port Terminal, Paraguay
      </p>
    </div>
  )
}

function Container3() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label />
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
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Facility photo
      </p>
    </div>
  )
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="22"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
        width="22"
      >
        <g id="Icon">
          <path
            d={svgPaths.p2e469200}
            id="Vector"
            stroke="#C7C7CC"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.375"
          />
        </g>
      </svg>
    </div>
  )
}

function Container7() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] h-[76px] items-center justify-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Icon />
      <p className="[word-break:break-word] font-['Open_Sans:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#c7c7cc] text-[10px] whitespace-nowrap">
        Default photo
      </p>
    </div>
  )
}

function Container6() {
  return (
    <div
      className="bg-[#f8f8f8] content-stretch flex flex-col h-[76px] items-start overflow-clip relative shrink-0 w-[227.2px]"
      data-name="Container"
    >
      <Container7 />
    </div>
  )
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-col h-[81px] items-start pt-[5px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container6 />
    </div>
  )
}

function Container4() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label1 />
      <Container5 />
    </div>
  )
}

function Label2() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Overview
      </p>
    </div>
  )
}

function TextArea() {
  return (
    <div
      className="absolute bg-[#f8f8f8] h-[51.3px] left-0 top-0 w-[227.2px]"
      data-name="Text Area"
    />
  )
}

function Container9() {
  return (
    <div className="h-[57.7px] relative shrink-0 w-full" data-name="Container">
      <TextArea />
    </div>
  )
}

function Container8() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label2 />
      <Container9 />
    </div>
  )
}

function Label3() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Facility location
      </p>
    </div>
  )
}

function TextArea1() {
  return (
    <div
      className="absolute bg-[#f8f8f8] h-[51.3px] left-0 top-0 w-[227.2px]"
      data-name="Text Area"
    />
  )
}

function Container11() {
  return (
    <div className="h-[57.7px] relative shrink-0 w-full" data-name="Container">
      <TextArea1 />
    </div>
  )
}

function Container10() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label3 />
      <Container11 />
    </div>
  )
}

function Label4() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Year operations began
      </p>
    </div>
  )
}

function TextInput1() {
  return (
    <div
      className="bg-[#f8f8f8] content-stretch flex flex-col h-[33.1px] items-start justify-center overflow-clip px-[10px] py-[6px] relative shrink-0 w-[227.2px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c1c1e] text-[13px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        2014
      </p>
    </div>
  )
}

function Container12() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label4 />
      <TextInput1 />
    </div>
  )
}

function Label5() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Activities
      </p>
    </div>
  )
}

function TextArea2() {
  return (
    <div
      className="absolute bg-[#f8f8f8] h-[51.3px] left-0 top-0 w-[227.2px]"
      data-name="Text Area"
    />
  )
}

function Container14() {
  return (
    <div className="h-[57.7px] relative shrink-0 w-full" data-name="Container">
      <TextArea2 />
    </div>
  )
}

function Container13() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label5 />
      <Container14 />
    </div>
  )
}

function Label6() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Capacity
      </p>
    </div>
  )
}

function TextInput2() {
  return (
    <div
      className="bg-[#f8f8f8] content-stretch flex flex-col h-[33.1px] items-start justify-center overflow-clip px-[10px] py-[6px] relative shrink-0 w-[227.2px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c1c1e] text-[13px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        500k tons of fertilizer a year
      </p>
    </div>
  )
}

function Container15() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label6 />
      <TextInput2 />
    </div>
  )
}

function Label7() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Average production (annual)
      </p>
    </div>
  )
}

function TextInput3() {
  return (
    <div
      className="bg-[#f8f8f8] content-stretch flex flex-col h-[33.1px] items-start justify-center overflow-clip px-[10px] py-[6px] relative shrink-0 w-[227.2px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c1c1e] text-[13px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        250k tons of fertilizer a year
      </p>
    </div>
  )
}

function Container16() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label7 />
      <TextInput3 />
    </div>
  )
}

function Label8() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Products
      </p>
    </div>
  )
}

function TextInput4() {
  return (
    <div
      className="bg-[#f8f8f8] content-stretch flex flex-col h-[33.1px] items-start justify-center overflow-clip px-[10px] py-[6px] relative shrink-0 w-[227.2px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c1c1e] text-[13px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Fertilizer (NPK blend)
      </p>
    </div>
  )
}

function Container17() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label8 />
      <TextInput4 />
    </div>
  )
}

function Label9() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Finished product destination
      </p>
    </div>
  )
}

function TextInput5() {
  return (
    <div
      className="bg-[#f8f8f8] content-stretch flex flex-col h-[33.1px] items-start justify-center overflow-clip px-[10px] py-[6px] relative shrink-0 w-[227.2px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c1c1e] text-[13px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >{`Paraguay's domestic market`}</p>
    </div>
  )
}

function Container18() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label9 />
      <TextInput5 />
    </div>
  )
}

function Label10() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Mode of transportation
      </p>
    </div>
  )
}

function TextArea3() {
  return (
    <div
      className="absolute bg-[#f8f8f8] h-[51.3px] left-0 rounded-[8px] top-0 w-[227.2px]"
      data-name="Text Area"
    />
  )
}

function Container20() {
  return (
    <div
      className="bg-[#f8f8f8] h-[57.7px] relative shrink-0 w-full"
      data-name="Container"
    >
      <TextArea3 />
    </div>
  )
}

function Container19() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label10 />
      <Container20 />
    </div>
  )
}

function Label11() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Employees
      </p>
    </div>
  )
}

function TextInput6() {
  return (
    <div
      className="bg-[#f8f8f8] content-stretch flex flex-col h-[33.1px] items-start justify-center overflow-clip px-[10px] py-[6px] relative shrink-0 w-[227.2px]"
      data-name="Text Input"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c1c1e] text-[13px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        50–100 direct employees
      </p>
    </div>
  )
}

function Container21() {
  return (
    <div
      className="border-[rgba(60,60,67,0.18)] border-b-[0.8px] border-solid content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label11 />
      <TextInput6 />
    </div>
  )
}

function Label12() {
  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start pb-[5px] relative shrink-0 w-[227.2px]"
      data-name="Label"
    >
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Key highlight
      </p>
    </div>
  )
}

function TextArea4() {
  return (
    <div
      className="absolute bg-[#f8f8f8] h-[51.3px] left-0 rounded-[8px] top-0 w-[227.2px]"
      data-name="Text Area"
    />
  )
}

function Container23() {
  return (
    <div
      className="bg-[#f8f8f8] h-[57.7px] relative shrink-0 w-full"
      data-name="Container"
    >
      <TextArea4 />
    </div>
  )
}

function Container22() {
  return (
    <div
      className="content-stretch flex flex-col items-start px-[14px] py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Label12 />
      <Container23 />
    </div>
  )
}

function Container2() {
  return (
    <div
      className="content-stretch flex flex-col h-[1145.3px] items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Container3 />
      <Container4 />
      <Container8 />
      <Container10 />
      <Container12 />
      <Container13 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container21 />
      <Container22 />
    </div>
  )
}

function Button() {
  return (
    <div
      className="absolute border-[#1e1e1e] border-[0.25px] border-solid h-[33.1px] left-0 top-[12px] w-[255.2px]"
      data-name="Button"
    >
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.5px] left-[127.55px] text-[#1e1e1e] text-[13px] text-center top-[6.35px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Reset to defaults
      </p>
    </div>
  )
}

function Container24() {
  return (
    <div className="h-[49.1px] relative shrink-0 w-full" data-name="Container">
      <Button />
    </div>
  )
}

function Container1() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip pb-[20px] pt-[12px] px-[16px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container2 />
      <Container24 />
    </div>
  )
}

export default function Sidebar() {
  return (
    <div
      className="bg-white border-[rgba(60,60,67,0.29)] border-r-[0.8px] border-solid content-stretch flex flex-col items-start relative size-full"
      data-name="Sidebar"
    >
      <Container />
      <Container1 />
    </div>
  )
}
