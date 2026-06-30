import svgPaths from "./svg-t73p04nvks";
import imgLink from "./c77c3e1ba3f25d02478b0084b6cdb839790d347f.png";
import imgImageBahasa from "./1a7906bac21488f66ee857d49e67859b35699df0.png";
import imgImageEnglish from "./f12db15ace38a8e4c123d598924160966a54f396.png";
import imgImageLogoKemenkes from "./9be0d0f25b1c20b3daee43e4df751777b4f9d044.png";
import imgImageCoin from "./fd06c4a613fabb1920440baff448b3ac16f7a19e.png";
import imgImageGermas from "./7dc3e4b64d1c24884b7284367f5d356aecacb5ed.png";
import imgImageGermas1 from "./0928803c4925f242e14114b4884d4c260b6fbf5d.png";

function ListItem() {
  return (
    <div className="relative self-stretch shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Contact Center: 1500034</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Web Call</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2635)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #FF5757)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_2635">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon />
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">SPGDT: (021) 568 2424</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Link">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLink} />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link1 />
      </div>
    </div>
  );
}

function ImageBahasa() {
  return (
    <div className="max-w-[20px] relative shrink-0 size-[20px]" data-name="Image (Bahasa)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBahasa} />
    </div>
  );
}

function ImageEnglish() {
  return (
    <div className="max-w-[20px] relative shrink-0 size-[20px]" data-name="Image (English)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEnglish} />
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <ListItem />
        <ListItem1 />
        <Link />
        <ListItem2 />
        <ImageBahasa />
        <ImageEnglish />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#3b9ca5] h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[64px] relative size-full">
          <List />
        </div>
      </div>
    </div>
  );
}

function ImageLogoKemenkes() {
  return (
    <div className="h-[47.813px] relative shrink-0 w-[120px]" data-name="Image (logo kemenkes)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLogoKemenkes} />
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageLogoKemenkes />
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[49.359px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] left-[8px] not-italic text-[#006370] text-[14px] top-0 whitespace-nowrap">Profil</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="relative self-stretch shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#006370] text-[14px] whitespace-nowrap">Dokter</p>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[69.094px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] left-[8px] not-italic text-[#006370] text-[14px] top-0 whitespace-nowrap">Layanan</p>
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="relative self-stretch shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#006370] text-[14px] whitespace-nowrap">Eksekutif</p>
      </div>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[103.016px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] left-[8px] not-italic text-[#006370] text-[14px] top-0 whitespace-nowrap">JantungPedia</p>
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="relative self-stretch shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#006370] text-[14px] whitespace-nowrap">Promosi</p>
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[78.219px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] left-[8px] not-italic text-[#006370] text-[14px] top-0 whitespace-nowrap">Informasi</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[85.703px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] left-[8px] not-italic text-[#006370] text-[14px] top-0 whitespace-nowrap">Edu Center</p>
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[94.375px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] left-[8px] not-italic text-[#006370] text-[14px] top-0 whitespace-nowrap">Pendaftaran</p>
      </div>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[79.625px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] left-[8px] not-italic text-[#006370] text-[14px] top-0 whitespace-nowrap">Pelaporan</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ListItem3 />
        <ListItem4 />
        <ListItem5 />
        <ListItem6 />
        <ListItem7 />
        <ListItem8 />
        <ListItem9 />
        <ListItem10 />
        <ListItem11 />
        <ListItem12 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[1571.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Link2 />
        <List1 />
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[20px] relative shrink-0 w-[172.75px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">Search...</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14.734px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7344 16">
        <g id="Icon">
          <path d={svgPaths.p7937300} id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.22787" />
          <path d={svgPaths.p5c29080} id="Vector_2" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.22787" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f0f0f0] h-[38px] relative rounded-[6px] shrink-0 w-[205.484px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[9px] py-px relative size-full">
        <TextInput />
        <Icon1 />
      </div>
    </div>
  );
}

function Link3() {
  return <div className="relative shrink-0 size-0" data-name="Link" />;
}

function Navigation() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[64px] relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[64px] relative size-full">
          <Container2 />
          <Container3 />
          <Link3 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container1 />
        <Navigation />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="opacity-40 relative size-[6px]" data-name="Text">
      <div aria-hidden className="absolute border-[#161616] border-r border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function TextTransform() {
  return (
    <div className="h-[6px] relative shrink-0 w-[26px]" data-name="Text:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] pr-[12px] relative size-full">
        <div className="absolute flex items-center justify-center left-[6.76px] size-[8.485px] top-[-1.24px]">
          <div className="flex-none rotate-45">
            <Text />
          </div>
        </div>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Pendaftaran</p>
      </div>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TextTransform />
        <Link5 />
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Link4 />
        <ListItem13 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[36px] relative shrink-0 w-[141.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip py-[8px] relative rounded-[inherit] size-full">
        <List2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#dbeef0] h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[64px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1f2937] text-[14px] text-center whitespace-nowrap">Nama lengkap pasien *</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[300px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[17px] py-px relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">Nama lengkap pasien</p>
      </div>
      <div aria-hidden className="absolute border border-[#3b9ca5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container7 />
        <TextInput1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1f2937] text-[14px] text-center whitespace-nowrap">Email *</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[300px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[17px] py-px relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">Email anda</p>
      </div>
      <div aria-hidden className="absolute border border-[#3b9ca5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container8 />
        <TextInput2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1f2937] text-[14px] text-center whitespace-nowrap">Telepon *</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[300px]" data-name="Number Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[17px] py-px relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">No HP</p>
      </div>
      <div aria-hidden className="absolute border border-[#3b9ca5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container9 />
        <NumberInput />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1f2937] text-[14px] text-center whitespace-nowrap">Tempat Lahir *</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[300px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[17px] py-px relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">Tempat lahir</p>
      </div>
      <div aria-hidden className="absolute border border-[#3b9ca5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container10 />
        <TextInput3 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1f2937] text-[14px] text-center whitespace-nowrap">Tanggal lahir *</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[300px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[17px] py-px relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">Tanggal lahir (dd/mm/yyyy)</p>
      </div>
      <div aria-hidden className="absolute border border-[#3b9ca5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
        <TextInput4 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1f2937] text-[14px] text-center whitespace-nowrap">No KTP (NIK) *</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function NumberInput1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[300px]" data-name="Number Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[17px] py-px relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">No KTP</p>
      </div>
      <div aria-hidden className="absolute border border-[#3b9ca5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container12 />
        <NumberInput1 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1f2937] text-[14px] text-center whitespace-nowrap">Pekerjaan *</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Option() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option1() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option2() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option3() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option4() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option5() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option6() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option7() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option8() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option9() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option10() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option11() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option12() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Option13() {
  return <div className="h-[24px] min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[300px]" data-name="Dropdown">
      <div aria-hidden className="absolute border border-[#3b9ca5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[17px] py-px relative size-full">
        <Option />
        <Option1 />
        <Option2 />
        <Option3 />
        <Option4 />
        <Option5 />
        <Option6 />
        <Option7 />
        <Option8 />
        <Option9 />
        <Option10 />
        <Option11 />
        <Option12 />
        <Option13 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container13 />
        <Dropdown />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#3b9ca5] h-[37px] left-[109.14px] rounded-[8px] top-[24px] w-[81.703px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[21px] left-[41px] not-italic text-[14px] text-center text-white top-[8px] whitespace-nowrap">Submit</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Container16() {
  return <div className="bg-[#eee] h-[78px] relative shrink-0 w-[304px]" data-name="Container" />;
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-[300px]" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label />
        <Label1 />
        <Label2 />
        <Label3 />
        <Label4 />
        <Label5 />
        <Label6 />
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[869px] relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#3b9ca5] text-[20px] text-center whitespace-nowrap">Pendaftaran Pasien Baru</p>
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] text-center w-[300px]">Silahkan isi formulir di bawah ini untuk mendaftarkan pasien</p>
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] text-center whitespace-nowrap">Kolom bertanda (*) wajib diisi</p>
        <Form />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[64px] py-[32px] relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container4 />
        <Section />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[28px] w-[60.453px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Kemenkes</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[56px] w-[62.203px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Dinkes DKI</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[84px] w-[45.813px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">SISRUTE</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[112px] w-[32.453px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">SIRUP</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[140px] w-[92.125px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">BPJS Kesehatan</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[168px] w-[170px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Perjanjian Online Kemenkes</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute h-[188px] left-[40px] top-[40px] w-[170px]" data-name="Navigation">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 tracking-[0.7px] uppercase whitespace-nowrap">Informasi</p>
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[72px] w-[89.547px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">LPSE Kemenkes</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[100px] w-[120.625px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">RS Online Kemenkes</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[128px] w-[31.391px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">PERKI</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[156px] w-[112.891px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Penjaminan Online</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[184px] w-[105.422px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Web Call RSJPDHK</p>
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[212px] w-[104.953px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Intranet RSJPDHK</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1811de30} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Pusat Jantung Nasional Harapan Kita</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Jl. Letjen S. Parman Kav 87 Slipi Jakarta Barat 11420</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[343px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[28px]" data-name="Container">
      <Icon2 />
      <Container18 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2594)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p31372c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p29e05ec0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_2594">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Telepon</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">
          <p className="leading-[20px] mb-0 whitespace-pre">{`Contact Center: 1500 034 `}</p>
          <p className="leading-[20px] mb-0 whitespace-pre">{` Whatsapp : 0811 911 5045 `}</p>
          <p className="leading-[20px] whitespace-pre">Emergency Contact: (021) 568 2424 (Hunting)</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[291px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[80px]" data-name="Container">
      <Icon3 />
      <Container20 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">info@pjnhk.go.id</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[118px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[172px]" data-name="Container">
      <Icon4 />
      <Container22 />
    </div>
  );
}

function Navigation2() {
  return (
    <div className="absolute h-[216px] left-[689.84px] top-[40px] w-[330px]" data-name="Navigation">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 tracking-[0.7px] uppercase whitespace-nowrap">Kontak Kami</p>
      <Container17 />
      <Container19 />
      <Container21 />
    </div>
  );
}

function ImageCoin() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Image (coin)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoin} />
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0 w-[126.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">KARS Paripurna</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 16">
        <g id="Icon">
          <path d={svgPaths.pe9b1a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute bg-[#369199] content-stretch flex gap-[8px] items-center left-0 p-[8px] rounded-[2px] top-[28px] w-[209.344px]" data-name="Link">
      <ImageCoin />
      <Text8 />
      <Icon5 />
    </div>
  );
}

function ImageCoin1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Image (coin)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoin} />
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0 w-[126.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">KARS International</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 16">
        <g id="Icon">
          <path d={svgPaths.pe9b1a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute bg-[#369199] content-stretch flex gap-[8px] items-center left-0 p-[8px] rounded-[2px] top-[92px] w-[209.344px]" data-name="Link">
      <ImageCoin1 />
      <Text9 />
      <Icon6 />
    </div>
  );
}

function ImageCoin2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Image (coin)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoin} />
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0 w-[126.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">JCI</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 16">
        <g id="Icon">
          <path d={svgPaths.pe9b1a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute bg-[#369199] content-stretch flex gap-[8px] items-center left-0 p-[8px] rounded-[2px] top-[156px] w-[209.344px]" data-name="Link">
      <ImageCoin2 />
      <Text10 />
      <Icon7 />
    </div>
  );
}

function Navigation3() {
  return (
    <div className="absolute h-[212px] left-[1192.44px] top-[40px] w-[209.344px]" data-name="Navigation">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 tracking-[0.7px] uppercase whitespace-nowrap">{`Sertifikat & Penghargaan`}</p>
      <Link18 />
      <Link19 />
      <Link20 />
    </div>
  );
}

function ImageGermas() {
  return (
    <div className="absolute h-[65.625px] left-0 top-[28px] w-[120px]" data-name="Image (germas)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGermas} />
    </div>
  );
}

function ImageGermas1() {
  return (
    <div className="absolute h-[35.625px] left-0 top-[101.63px] w-[120px]" data-name="Image (germas)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGermas1} />
    </div>
  );
}

function Navigation4() {
  return (
    <div className="absolute h-[137.25px] left-[1581.39px] top-[40px] w-[120px]" data-name="Navigation">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 tracking-[0.7px] uppercase whitespace-nowrap">PJNHK Mobile</p>
      <ImageGermas />
      <ImageGermas1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#3b9ca5] h-[296px] relative shrink-0 w-full" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Navigation1 />
        <Link12 />
        <Link13 />
        <Link14 />
        <Link15 />
        <Link16 />
        <Link17 />
        <Navigation2 />
        <Navigation3 />
        <Navigation4 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute h-[20px] left-[40px] top-[17px] w-[166.359px]" data-name="Sidebar">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 whitespace-nowrap">© 2025. All rights reserved</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <path d={svgPaths.p26f93800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.15%_33.15%_33.51%_33.51%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p1d212c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.04%_72.92%_72.92%]" data-name="Vector">
          <div className="absolute inset-[-1px_-9999.77%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1761px] size-[24px] top-[17px]" data-name="Link">
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.5%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18.0003">
            <path d={svgPaths.p3c566b00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1801px] size-[24px] top-[17px]" data-name="Link">
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-0 left-1/4 right-1/4 top-0" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
            <path d={svgPaths.p1176b080} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1841px] size-[24px] top-[17px]" data-name="Link">
      <Icon10 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="bg-[#3b9ca5] h-[57px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Sidebar />
        <Link21 />
        <Link22 />
        <Link23 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[100px] relative shrink-0 w-[102px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 100">
        <g clipPath="url(#clip0_1_2581)" id="Icon">
          <g filter="url(#filter0_d_1_2581)" id="Group">
            <path d={svgPaths.p11363340} fill="var(--fill-0, #3B9CA5)" id="Vector" />
          </g>
          <path d={svgPaths.pbf91500} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="100" id="filter0_d_1_2581" width="101.828" x="0.172" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="5" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.235294 0 0 0 0 0.588235 0 0 0 0 0.760784 0 0 0 0.4 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2581" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2581" mode="normal" result="shape" />
          </filter>
          <clipPath id="clip0_1_2581">
            <rect fill="white" height="100" width="102" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute left-[1787px] top-[1029px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white max-w-[1920px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Header />
        <MainContent />
        <Footer />
        <Footer1 />
        <Button1 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container />
      </div>
    </div>
  );
}

export default function RsjpdHarapanKita() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="RSJPD Harapan Kita">
      <Body />
    </div>
  );
}