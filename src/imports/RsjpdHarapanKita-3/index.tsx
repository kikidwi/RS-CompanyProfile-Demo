import svgPaths from "./svg-z4u5x42mi1";
import imgLink from "./c77c3e1ba3f25d02478b0084b6cdb839790d347f.png";
import imgImageBahasa from "./1a7906bac21488f66ee857d49e67859b35699df0.png";
import imgImageEnglish from "./f12db15ace38a8e4c123d598924160966a54f396.png";
import imgImageLogoKemenkes from "./9be0d0f25b1c20b3daee43e4df751777b4f9d044.png";
import imgImagePortalEdukasiKardioVascular from "./850a77094454e7fc04fafdbaa186675ed9363bb5.png";
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
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Portal Edukasi Kardio Vascular</p>
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
    <div className="h-[36px] relative shrink-0 w-[258.672px]" data-name="Container">
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

function ImagePortalEdukasiKardioVascular() {
  return (
    <div className="h-[310.969px] relative shrink-0 w-[1777px]" data-name="Image (Portal Edukasi Kardio Vascular)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePortalEdukasiKardioVascular} />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#3b9ca5] text-[24px] whitespace-nowrap">Portal Edukasi Kardio Vascular</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#3b9ca5] text-[18px] whitespace-nowrap">Portal Edukasi Kardio Vascular</p>
      </div>
    </div>
  );
}

function ImageImage() {
  return <div className="absolute left-[137.16px] size-[150px] top-0" data-name="Image (Image 1)" />;
}

function Link6() {
  return (
    <div className="absolute h-[150px] left-[10px] top-[10px] w-[424.328px]" data-name="Link">
      <ImageImage />
    </div>
  );
}

function ImageImage1() {
  return <div className="absolute left-[137.11px] size-[150px] top-0" data-name="Image (Image 2)" />;
}

function Link7() {
  return (
    <div className="absolute h-[150px] left-[454.33px] top-[10px] w-[424.219px]" data-name="Link">
      <ImageImage1 />
    </div>
  );
}

function ImageImage2() {
  return <div className="absolute left-[137.11px] size-[150px] top-0" data-name="Image (Image 3)" />;
}

function Link8() {
  return (
    <div className="absolute h-[150px] left-[898.55px] top-[10px] w-[424.219px]" data-name="Link">
      <ImageImage2 />
    </div>
  );
}

function ImageImage3() {
  return <div className="absolute left-[137.11px] size-[150px] top-0" data-name="Image (Image 4)" />;
}

function Link9() {
  return (
    <div className="absolute h-[150px] left-[1342.77px] top-[10px] w-[424.234px]" data-name="Link">
      <ImageImage3 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] h-[44px] leading-[24px] left-0 not-italic text-[16px] text-black text-center top-[170px] w-[1777px] whitespace-nowrap" data-name="Table Row">
      <p className="-translate-x-1/2 absolute left-[222.64px] top-[9px]">Informasi Tindakan</p>
      <p className="-translate-x-1/2 absolute left-[667.05px] top-[9px]">Informasi Umum</p>
      <p className="-translate-x-1/2 absolute left-[1110.89px] top-[9px]">Informasi Penyakit</p>
      <p className="-translate-x-1/2 absolute left-[1554.84px] top-[9px]">Video Edukasi</p>
    </div>
  );
}

function Table() {
  return (
    <div className="h-[214px] relative shrink-0 w-[1777px]" data-name="Table">
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <TableRow />
    </div>
  );
}

function TableMargin() {
  return (
    <div className="relative shrink-0" data-name="Table:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Table />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7b7b7b] text-[16px] whitespace-nowrap">Informasi Tindakan</p>
      </div>
    </div>
  );
}

function ImagePfdIcon() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link10() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan Ablasi</p>
      </div>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon />
        <Link10 />
      </div>
    </div>
  );
}

function ImagePfdIcon1() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link11() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan Balon Katup Pulmonal</p>
      </div>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon1 />
        <Link11 />
      </div>
    </div>
  );
}

function ImagePfdIcon2() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link12() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">{`Tindakan Bedah 'TGA' dengan 'ASO'`}</p>
      </div>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon2 />
        <Link12 />
      </div>
    </div>
  );
}

function ImagePfdIcon3() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link13() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan Bedah Vaskular</p>
      </div>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon3 />
        <Link13 />
      </div>
    </div>
  );
}

function ImagePfdIcon4() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link14() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan Bedah VSD dengan Alat</p>
      </div>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon4 />
        <Link14 />
      </div>
    </div>
  );
}

function ImagePfdIcon5() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link15() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan CABG (Coronary Artery Bypass Grating)</p>
      </div>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon5 />
        <Link15 />
      </div>
    </div>
  );
}

function ImagePfdIcon6() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link16() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan Cimino</p>
      </div>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon6 />
        <Link16 />
      </div>
    </div>
  );
}

function ImagePfdIcon7() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link17() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan Penutupan ASD dengan Alat</p>
      </div>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon7 />
        <Link17 />
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] top-[10px] w-[809.609px]" data-name="List">
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
      <ListItem20 />
      <ListItem21 />
    </div>
  );
}

function ImagePfdIcon8() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link18() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan Kateterisasi</p>
      </div>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon8 />
        <Link18 />
      </div>
    </div>
  );
}

function ImagePfdIcon9() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link19() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan MAZE</p>
      </div>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon9 />
        <Link19 />
      </div>
    </div>
  );
}

function ImagePfdIcon10() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link20() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan MISC (Minimally Invasive Cardiac Sugery)</p>
      </div>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon10 />
        <Link20 />
      </div>
    </div>
  );
}

function ImagePfdIcon11() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link21() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan MVR - Mitral Valve Replacement</p>
      </div>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon11 />
        <Link21 />
      </div>
    </div>
  );
}

function ImagePfdIcon12() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link22() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan OPCAB</p>
      </div>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon12 />
        <Link22 />
      </div>
    </div>
  );
}

function ImagePfdIcon13() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link23() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan PCI (Percuteneous Coronary Intervension)</p>
      </div>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon13 />
        <Link23 />
      </div>
    </div>
  );
}

function ImagePfdIcon14() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link24() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan PDA (Patent Ductus Asterious)</p>
      </div>
    </div>
  );
}

function ListItem28() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon14 />
        <Link24 />
      </div>
    </div>
  );
}

function ImagePfdIcon15() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link25() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tindakan Pemasangan PPM (Permanent Peacemaker)</p>
      </div>
    </div>
  );
}

function ListItem29() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon15 />
        <Link25 />
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[839.61px] top-[10px] w-[885.391px]" data-name="List">
      <ListItem22 />
      <ListItem23 />
      <ListItem24 />
      <ListItem25 />
      <ListItem26 />
      <ListItem27 />
      <ListItem28 />
      <ListItem29 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[372px] relative shrink-0 w-[1735px]" data-name="Table">
      <List3 />
      <List4 />
    </div>
  );
}

function TableMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Table1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Heading1 />
        <TableMargin1 />
      </div>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[50px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7b7b7b] text-[16px] whitespace-nowrap">Informasi Umum</p>
      </div>
    </div>
  );
}

function ImagePfdIcon16() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link26() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Seperti Apa Nyeri Dada Saat Serangan Jantung?</p>
      </div>
    </div>
  );
}

function ListItem30() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon16 />
        <Link26 />
      </div>
    </div>
  );
}

function ImagePfdIcon17() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link27() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Stimulasi Anak Usia 2-3 Tahun</p>
      </div>
    </div>
  );
}

function ListItem31() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon17 />
        <Link27 />
      </div>
    </div>
  );
}

function ImagePfdIcon18() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link28() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Diet Gagal Ginjal Kronik dengan HD</p>
      </div>
    </div>
  );
}

function ListItem32() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon18 />
        <Link28 />
      </div>
    </div>
  );
}

function ImagePfdIcon19() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link29() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Diet Praktis Turunkan kadal Kolesterol</p>
      </div>
    </div>
  );
}

function ListItem33() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon19 />
        <Link29 />
      </div>
    </div>
  );
}

function ImagePfdIcon20() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link30() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Informasi Obat</p>
      </div>
    </div>
  );
}

function ListItem34() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon20 />
        <Link30 />
      </div>
    </div>
  );
}

function ImagePfdIcon21() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link31() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Jika Temukan Pasien Tidak Sadarkan Diri</p>
      </div>
    </div>
  );
}

function ListItem35() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon21 />
        <Link31 />
      </div>
    </div>
  );
}

function ImagePfdIcon22() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link32() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Lima Faktor Pemicu Serangan Jantung</p>
      </div>
    </div>
  );
}

function ListItem36() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon22 />
        <Link32 />
      </div>
    </div>
  );
}

function ImagePfdIcon23() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link33() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Makanan Sehat Bagi Serangan Jantung</p>
      </div>
    </div>
  );
}

function ListItem37() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon23 />
        <Link33 />
      </div>
    </div>
  );
}

function ImagePfdIcon24() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link34() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Manajemen Nyeri</p>
      </div>
    </div>
  );
}

function ListItem38() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon24 />
        <Link34 />
      </div>
    </div>
  );
}

function ImagePfdIcon25() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link35() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Mandi Dengan Chlorhexidine 4% Sebelum Operasi</p>
      </div>
    </div>
  );
}

function ListItem39() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon25 />
        <Link35 />
      </div>
    </div>
  );
}

function ImagePfdIcon26() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link36() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Manfaat Latihan Fisik Rutin</p>
      </div>
    </div>
  );
}

function ListItem40() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon26 />
        <Link36 />
      </div>
    </div>
  );
}

function ImagePfdIcon27() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link37() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Menemukan Kebahagiaan Saat Bekerja Apakah Bisa?</p>
      </div>
    </div>
  );
}

function ListItem41() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon27 />
        <Link37 />
      </div>
    </div>
  );
}

function ImagePfdIcon28() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link38() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Olahraga Pasca Operasi Jantung</p>
      </div>
    </div>
  );
}

function ListItem42() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon28 />
        <Link38 />
      </div>
    </div>
  );
}

function ImagePfdIcon29() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link39() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Optimalkan Asi Cegah Stunting</p>
      </div>
    </div>
  );
}

function ListItem43() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon29 />
        <Link39 />
      </div>
    </div>
  );
}

function List5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] top-[10px] w-[846.828px]" data-name="List">
      <ListItem30 />
      <ListItem31 />
      <ListItem32 />
      <ListItem33 />
      <ListItem34 />
      <ListItem35 />
      <ListItem36 />
      <ListItem37 />
      <ListItem38 />
      <ListItem39 />
      <ListItem40 />
      <ListItem41 />
      <ListItem42 />
      <ListItem43 />
    </div>
  );
}

function ImagePfdIcon30() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link40() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Orientasi Ruang ICU Sebelum Operasi</p>
      </div>
    </div>
  );
}

function ListItem44() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon30 />
        <Link40 />
      </div>
    </div>
  );
}

function ImagePfdIcon31() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link41() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Pencegahan dan Pengendalian Infeksi</p>
      </div>
    </div>
  );
}

function ListItem45() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon31 />
        <Link41 />
      </div>
    </div>
  );
}

function ImagePfdIcon32() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link42() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Pencegahan Pasien Jatuh</p>
      </div>
    </div>
  );
}

function ListItem46() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon32 />
        <Link42 />
      </div>
    </div>
  );
}

function ImagePfdIcon33() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link43() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Penyimpanan dan Pemberian Asi</p>
      </div>
    </div>
  );
}

function ListItem47() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon33 />
        <Link43 />
      </div>
    </div>
  );
}

function ImagePfdIcon34() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link44() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Peratuan di Ruang CVCU</p>
      </div>
    </div>
  );
}

function ListItem48() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon34 />
        <Link44 />
      </div>
    </div>
  );
}

function ImagePfdIcon35() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link45() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Perawatan Luka Operasi Menggunakan Adhesive Tape</p>
      </div>
    </div>
  );
}

function ListItem49() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon35 />
        <Link45 />
      </div>
    </div>
  );
}

function ImagePfdIcon36() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link46() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Perawatan Luka Operasi Tanpa Adhesive Tape</p>
      </div>
    </div>
  );
}

function ListItem50() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon36 />
        <Link46 />
      </div>
    </div>
  );
}

function ImagePfdIcon37() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link47() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Perawatan Pasca Pasang Ring</p>
      </div>
    </div>
  );
}

function ListItem51() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon37 />
        <Link47 />
      </div>
    </div>
  );
}

function ImagePfdIcon38() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link48() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Persiapan Pasien Operasi Elektif</p>
      </div>
    </div>
  );
}

function ListItem52() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon38 />
        <Link48 />
      </div>
    </div>
  );
}

function ImagePfdIcon39() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link49() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Teknik Anestesi dan Transfusi Darah</p>
      </div>
    </div>
  );
}

function ListItem53() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon39 />
        <Link49 />
      </div>
    </div>
  );
}

function ImagePfdIcon40() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link50() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Tumbuh Kembang Anak</p>
      </div>
    </div>
  );
}

function ListItem54() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon40 />
        <Link50 />
      </div>
    </div>
  );
}

function ImagePfdIcon41() {
  return <div className="h-full relative shrink-0 w-[24px]" data-name="Image (pfd icon)" />;
}

function Link51() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#7b7b7b] text-[14px] whitespace-nowrap">Wafarin</p>
      </div>
    </div>
  );
}

function ListItem55() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative size-full">
        <ImagePfdIcon41 />
        <Link51 />
      </div>
    </div>
  );
}

function List6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[876.83px] top-[10px] w-[848.172px]" data-name="List">
      <ListItem44 />
      <ListItem45 />
      <ListItem46 />
      <ListItem47 />
      <ListItem48 />
      <ListItem49 />
      <ListItem50 />
      <ListItem51 />
      <ListItem52 />
      <ListItem53 />
      <ListItem54 />
      <ListItem55 />
    </div>
  );
}

function Table2() {
  return (
    <div className="h-[636px] relative shrink-0 w-[1735px]" data-name="Table">
      <List5 />
      <List6 />
    </div>
  );
}

function TableMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Table2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Heading2 />
        <TableMargin2 />
      </div>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[50px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7b7b7b] text-[16px] whitespace-nowrap">Informasi Penyakit</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#3b9ca5] h-[50px] relative rounded-[20px] shrink-0 w-[120px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[10px] relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">JantungPedia</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Heading3 />
        <Container11 />
      </div>
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[50px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7b7b7b] text-[16px] whitespace-nowrap">Video Edukasi</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Arial:Bold',sans-serif] leading-[20.24px] not-italic relative shrink-0 text-[14.667px] text-black whitespace-nowrap">OJAN SERIES</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return <div className="h-[22.078px] relative shrink-0 w-full" data-name="Paragraph" />;
}

function ListItem56() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Tinos:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <span className="font-['Times_New_Roman:Regular',sans-serif] leading-[22.08px]">{`Penyumbatan Pembuluh Darah - dr. `}</span>
          <span className="font-['Times_New_Roman:Regular',sans-serif] leading-[22.08px] text-[#131313]">Isman Firdaus, Sp.JP(K)., M.PH., FESC, FACC, FSCAI</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #1 - Penyumbatan Pembuluh Darah: Pemahaman, Penyebab, Gejala, dan Tindakan Pencegahan</p>
      </div>
    </div>
  );
}

function ListItem57() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Tindakan Bypass Jantung - dr. Wirya A. Graha, Sp.BTKV. Subsp.JD(K)</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #2 - Tindakan Bypass Jantung | Operasi Jantung | dr. Wirya A. Graha, Sp.BTKV. Subsp.JD(K)</p>
      </div>
    </div>
  );
}

function ListItem58() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Olahraga Pasca Operasi Jantung - dr. Kevin Triangto, BMedSC.(Hons.), Sp.KFR</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #3 - OLAHRAGA PASCA OPERASI JANTUNG | REHABILITASI | dr. Kevin Triangto, BMedSC.(Hons.), Sp.KFR</p>
      </div>
    </div>
  );
}

function ListItem59() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{`Hipertensi - dr. Mira Fauziah, Sp.JP(K), FIHA `}</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">{`OJAN #4 - HIPERTENSI | PENGERTIAN, GEJALA, CIRI & CARA MENGATASI | dr. Mira Fauziah, Sp.JP(K), FIHA`}</p>
      </div>
    </div>
  );
}

function ListItem60() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Vaskular - dr. Suko Adiarto, Sp.JP(K), Ph.D</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #5 - VASKULAR | PENGERTIAN, CIRI, GEJALA, DAN PENANGANAN - dr. Suko Adiarto, Sp.JP(K), Ph.D</p>
      </div>
    </div>
  );
}

function ListItem61() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arimo:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
          <span className="font-['Arial:Regular',sans-serif] leading-[22.08px] text-[16px]">{`Jantung Bocor Pada Anak (ASD) `}</span>
          <span className="font-['Arial:Italic',sans-serif] leading-[22.08px] text-[16px]">Atrial Septal Defect</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[22.08px] text-[16px]">{` - dr. Sisca Natalia Siagian, Sp.JP(K) `}</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #6 - Jantung Bocor Pada Anak (ASD) Atrial Septal Defect - dr. Sisca Natalia Siagian, Sp.JP(K)</p>
      </div>
    </div>
  );
}

function ListItem62() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arimo:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
          <span className="font-['Arial:Regular',sans-serif] leading-[22.08px] text-[16px]">{`Jantung Bocor Pada Anak (VSD) `}</span>
          <span className="font-['Arial:Italic',sans-serif] leading-[22.08px] text-[16px]">Ventricular Septal Defect</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[22.08px] text-[16px]">{` - dr. Radityo Prakoso, Sp.JP (K) `}</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #7 - Jantung Bocor Pada Anak (VSD) Ventricular Septal Defect - dr. Radityo Prakoso, Sp.JP (K)</p>
      </div>
    </div>
  );
}

function ListItem63() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Tetralogy of Fallot | dr. Panji Utomo, Sp.BTKV(K) P | Penyakit Jantung Bawaan Biru</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #8 Tetralogi Of Fallot (TOF) | dr. Panji Utomo, Sp.BTKV(K) P</p>
      </div>
    </div>
  );
}

function ListItem64() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">EVAR (Endovascular Aneurysm Repair) | dr. Suci Indriani, Sp.JP (K), FIHA</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #9 - EVAR (Endovascular Aneurysm Repair) | dr. Suci Indriani, Sp.JP (K), FIHA</p>
      </div>
    </div>
  );
}

function ListItem65() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{`TINDAKAN BMV (BALLOON MITRAL VALVULOPASTY) | dr. Arwin Saleh Mangkuanom, Sp.JP (K), FIHA `}</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #10 - TINDAKAN BMV (BALLOON MITRAL VALVULOPASTY) | dr. Arwin Saleh Mangkuanom, Sp.JP (K), FIHA</p>
      </div>
    </div>
  );
}

function ListItem66() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{`Permanent Pacemaker | Alat Pacu Jantung Permanen | Dr. dr. Dicky Armein Hanafy, Sp.JP(K) `}</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #11 - PERMANENT PACEMAKER | ALAT PACU JANTUNG PERMANEN | Dr. dr. Dicky Armein Hanafy, Sp.JP(K)</p>
      </div>
    </div>
  );
}

function ListItem67() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Serangan Jantung STEMI | dr. Siska Suridanda Danny, Sp.JP(K)</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #12 - SERANGAN JANTUNG (STEMI) | dr. Siska Suridanda Danny, Sp.JP(K)</p>
      </div>
    </div>
  );
}

function ListItem68() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Serangan Jantung NSTEMI | dr. dr. Vienna Rossimarina, Sp.JP (K)</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #13 - SERANGAN JANTUNG (NSTEMI) | dr. Vienna Rossimarina, Sp.JP (K)</p>
      </div>
    </div>
  );
}

function ListItem69() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Perlukah Ukur Tekanan Darah Setiap Hari? | dr. Susetyo Atmojo, Sp.JP (K)</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #14 - PERLUKAH UKUR TEKANAN DARAH (TENSI) SETIAP HARI? | dr. Susetyo Atmojo, Sp.JP(K)</p>
      </div>
    </div>
  );
}

function ListItem70() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Gagal Jantung Boleh Olahraga? | dr. Kevin Triangto, BMedSc. (Hons.), Sp.KFR, K.R. (K)</p>
      </div>
    </div>
  );
}

function NumberedList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Numbered List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <ListItem70 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #15 - GAGAL JANTUNG BOLEH OLAHRAGA? | dr. Kevin Triangto, BMedSc. (Hons.), Sp.KFR, K.R. (K)</p>
      </div>
    </div>
  );
}

function ListItem71() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{`Penyakit Jantung Pada Lansia | dr. Basuni Radi, Sp.JP(K) `}</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #16 - Penyakit Jantung Pada Lansia | dr. Basuni Radi, Sp.JP(K)</p>
      </div>
    </div>
  );
}

function ListItem72() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Obesitas di Indonesia | dr. Sentot Handoko, Sp.GK, AIFO-K</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #17 - OBESITAS DI INDONESA: PENYEBAB DAN PENCEGAHAN | dr. Sentot Handoko, Sp. GK, AIFO-K</p>
      </div>
    </div>
  );
}

function ListItem73() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Gagal Jantung (ADHF) - dr. Susetyo Atmojo, Sp.JP</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #18 - GAGAL JANTUNG (ADHF) | dr. Susetyo Atmojo, Sp.JP</p>
      </div>
    </div>
  );
}

function ListItem74() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] whitespace-nowrap">Tindakan Pada Katup Jantung (MVR) | Dr. dr. Amin Tjubandi, Sp.BTKV, Subsp.JD(K)</p>
      </div>
    </div>
  );
}

function NumberedList1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Numbered List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <ListItem74 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #19 - TINDAKAN PADA KATUP JANTUNG (MVR) | Dr. dr. Amin Tjubandi, Sp.BTKV, Subsp.JD(K)</p>
      </div>
    </div>
  );
}

function ListItem75() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Arimo:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] whitespace-nowrap">
          <span className="font-['Arial:Regular',sans-serif] leading-[22.08px]">{`Mitos Fakta Penyakit Jantung Koroner | `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[22.08px] text-[#131313]">{`dr. Vienna Rossimarina, Sp.JP(K) dan dr. Vidya Gilang Rejeki, Sp.JP(K) `}</span>
        </p>
      </div>
    </div>
  );
}

function NumberedList2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Numbered List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <ListItem75 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #20 - MITOS FAKTA PENYAKIT JANTUNG KORONER</p>
      </div>
    </div>
  );
}

function ListItem76() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] whitespace-nowrap">Penyakit Katup Jantung | Prof. Dr. dr. Amiliana M Soesanto, Sp.JP (K)</p>
      </div>
    </div>
  );
}

function NumberedList3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Numbered List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <ListItem76 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #21 - Penyakit Katup Jantung | Prof. Dr. dr. Amiliana M Soesanto, Sp.JP (K)</p>
      </div>
    </div>
  );
}

function ListItem77() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] whitespace-nowrap">Tindakan FONTAN - Bedah jantung Anak | dr. Panji Utomo, Sp.BTKV(K) P</p>
      </div>
    </div>
  );
}

function NumberedList4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Numbered List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <ListItem77 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[23px] relative shrink-0 w-[1735px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[22.08px] not-italic relative shrink-0 text-[#15c] text-[16px] underline whitespace-nowrap">OJAN #22 - TINDAKAN FONTAN - BEDAH JANTUNG ANAK | dr. Panji Utomo, Sp.BTKV(K) P</p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Arial:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">VIDEO EDUKASI LAINNYA</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Tinos:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
          <span className="font-['Times_New_Roman:Regular',sans-serif] leading-[24px] text-[16px]">{`1. `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[24px] text-[16px]">Kenapa harus cuci tangan?</span>
          <span className="font-['Times_New_Roman:Regular',sans-serif] leading-[24px] text-[16px]">{` - `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[24px] text-[#15c] text-[16px] underline">KENAPA SIH HARUS CUCI TANGAN?! | VIDEO EDUKASI KEBERSIHAN TANGAN | CUCI TANGAN</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Arimo:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <span className="font-['Arial:Regular',sans-serif] leading-[24px]">{`2. Penyuluhan di Rumah Sakit Jantung dan Pembuluh Darah Harapan Kita - `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[24px] text-[#15c] underline">EDUKASI KESEHATAN RUMAH SAKIT JANTUNG DAN PEMBULUH DARAH HARAPAN KITA</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Arimo:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <span className="font-['Arial:Regular',sans-serif] leading-[24px]">{`3. Gerakan Pemanasan Untuk Pasien Jantung di Rumah - `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[24px] text-[#15c] underline">GERAKAN PEMANASAN UNTUK PASIEN JANTUNG DI RUMAH</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Arimo:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] whitespace-nowrap">
          <span className="font-['Arial:Regular',sans-serif] leading-[24px]">{`4. Orientasi Intensive Care Unit (ICU) Anak dan PJB - RS Jantung dan Pembuluh Darah Harapan kita - `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Arial:Regular',sans-serif] leading-[24px] text-[#15c] underline">Orientasi Intensive Care Unit (ICU) - Anak dan PJB - RS Jantung dan Pembuluh Darah Harapan kita</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph30() {
  return <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph" />;
}

function Paragraph31() {
  return <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph" />;
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Heading4 />
        <Paragraph1 />
        <Paragraph2 />
        <ListItem56 />
        <Paragraph3 />
        <ListItem57 />
        <Paragraph4 />
        <ListItem58 />
        <Paragraph5 />
        <ListItem59 />
        <Paragraph6 />
        <ListItem60 />
        <Paragraph7 />
        <ListItem61 />
        <Paragraph8 />
        <ListItem62 />
        <Paragraph9 />
        <ListItem63 />
        <Paragraph10 />
        <ListItem64 />
        <Paragraph11 />
        <ListItem65 />
        <Paragraph12 />
        <ListItem66 />
        <Paragraph13 />
        <ListItem67 />
        <Paragraph14 />
        <ListItem68 />
        <Paragraph15 />
        <ListItem69 />
        <Paragraph16 />
        <NumberedList />
        <Paragraph17 />
        <ListItem71 />
        <Paragraph18 />
        <ListItem72 />
        <Paragraph19 />
        <ListItem73 />
        <Paragraph20 />
        <NumberedList1 />
        <Paragraph21 />
        <NumberedList2 />
        <Paragraph22 />
        <NumberedList3 />
        <Paragraph23 />
        <NumberedList4 />
        <Paragraph24 />
        <Paragraph25 />
        <Paragraph26 />
        <Paragraph27 />
        <Paragraph28 />
        <Paragraph29 />
        <Paragraph30 />
        <Paragraph31 />
      </div>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[50px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <TableMargin />
        <ContainerMargin />
        <ContainerMargin1 />
        <ContainerMargin2 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[1777px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Paragraph />
        <Container7 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start px-[64px] py-[24px] relative size-full">
        <ImagePortalEdukasiKardioVascular />
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

function Link52() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[28px] w-[60.453px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Kemenkes</p>
    </div>
  );
}

function Link53() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[56px] w-[62.203px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Dinkes DKI</p>
    </div>
  );
}

function Link54() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[84px] w-[45.813px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">SISRUTE</p>
    </div>
  );
}

function Link55() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[112px] w-[32.453px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">SIRUP</p>
    </div>
  );
}

function Link56() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-0 top-[140px] w-[92.125px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">BPJS Kesehatan</p>
    </div>
  );
}

function Link57() {
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
      <Link52 />
      <Link53 />
      <Link54 />
      <Link55 />
      <Link56 />
      <Link57 />
    </div>
  );
}

function Link58() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[72px] w-[89.547px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">LPSE Kemenkes</p>
    </div>
  );
}

function Link59() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[100px] w-[120.625px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">RS Online Kemenkes</p>
    </div>
  );
}

function Link60() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[128px] w-[31.391px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">PERKI</p>
    </div>
  );
}

function Link61() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[156px] w-[112.891px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Penjaminan Online</p>
    </div>
  );
}

function Link62() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[389.61px] top-[184px] w-[105.422px]" data-name="Link">
      <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Web Call RSJPDHK</p>
    </div>
  );
}

function Link63() {
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

function Paragraph32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Pusat Jantung Nasional Harapan Kita</p>
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Jl. Letjen S. Parman Kav 87 Slipi Jakarta Barat 11420</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[343px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph32 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[28px]" data-name="Container">
      <Icon2 />
      <Container14 />
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

function Paragraph34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Telepon</p>
      </div>
    </div>
  );
}

function Paragraph35() {
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

function Container16() {
  return (
    <div className="relative shrink-0 w-[291px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph34 />
        <Paragraph35 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[80px]" data-name="Container">
      <Icon3 />
      <Container16 />
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

function Paragraph36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">info@pjnhk.go.id</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[118px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph36 />
        <Paragraph37 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[172px]" data-name="Container">
      <Icon4 />
      <Container18 />
    </div>
  );
}

function Navigation2() {
  return (
    <div className="absolute h-[216px] left-[689.84px] top-[40px] w-[330px]" data-name="Navigation">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 tracking-[0.7px] uppercase whitespace-nowrap">Kontak Kami</p>
      <Container13 />
      <Container15 />
      <Container17 />
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

function Text1() {
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

function Link64() {
  return (
    <div className="absolute bg-[#369199] content-stretch flex gap-[8px] items-center left-0 p-[8px] rounded-[2px] top-[28px] w-[209.344px]" data-name="Link">
      <ImageCoin />
      <Text1 />
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

function Text2() {
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

function Link65() {
  return (
    <div className="absolute bg-[#369199] content-stretch flex gap-[8px] items-center left-0 p-[8px] rounded-[2px] top-[92px] w-[209.344px]" data-name="Link">
      <ImageCoin1 />
      <Text2 />
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

function Text3() {
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

function Link66() {
  return (
    <div className="absolute bg-[#369199] content-stretch flex gap-[8px] items-center left-0 p-[8px] rounded-[2px] top-[156px] w-[209.344px]" data-name="Link">
      <ImageCoin2 />
      <Text3 />
      <Icon7 />
    </div>
  );
}

function Navigation3() {
  return (
    <div className="absolute h-[212px] left-[1192.44px] top-[40px] w-[209.344px]" data-name="Navigation">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 tracking-[0.7px] uppercase whitespace-nowrap">{`Sertifikat & Penghargaan`}</p>
      <Link64 />
      <Link65 />
      <Link66 />
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
        <Link58 />
        <Link59 />
        <Link60 />
        <Link61 />
        <Link62 />
        <Link63 />
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

function Link67() {
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

function Link68() {
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

function Link69() {
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
        <Link67 />
        <Link68 />
        <Link69 />
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

function Button() {
  return (
    <div className="absolute left-[1787px] top-[829px]" data-name="Button">
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
        <Button />
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