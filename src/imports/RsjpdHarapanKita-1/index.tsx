import svgPaths from "./svg-nnr2g4ea5g";
import imgLink from "./c77c3e1ba3f25d02478b0084b6cdb839790d347f.png";
import imgImageBahasa from "./1a7906bac21488f66ee857d49e67859b35699df0.png";
import imgImageEnglish from "./f12db15ace38a8e4c123d598924160966a54f396.png";
import imgImageLogoKemenkes from "./9be0d0f25b1c20b3daee43e4df751777b4f9d044.png";
import imgImageJadwalDiklatKardiovaskular from "./811619ee28637ef12e8a04def6ccf8bc54753bbf.png";
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
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Jadwal Diklat Kardiovaskular</p>
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
    <div className="h-[36px] relative shrink-0 w-[248.109px]" data-name="Container">
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

function ImageJadwalDiklatKardiovaskular() {
  return (
    <div className="h-[416.266px] relative shrink-0 w-[1777px]" data-name="Image (Jadwal Diklat Kardiovaskular)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageJadwalDiklatKardiovaskular} />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#3b9ca5] text-[24px] whitespace-nowrap">Jadwal Diklat Kardiovaskular</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#3b9ca5] text-[18px] whitespace-nowrap">Daftar Workshop Diklat 2025:</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph" />;
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden className="absolute border-[#048a7f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[#048a7f] text-[20.8px] whitespace-nowrap">Pelatihan (Jangka Panjang)</p>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1514.547px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Nama Pelatihan</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1514.55px] top-0 w-[261.453px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Link Dokumen</p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[#048a7f] h-[41px] left-[0.5px] top-[0.5px] w-[1776px]" data-name="Table Header">
      <HeaderCell />
      <HeaderCell1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1514.547px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Pelatihan Perfusionis</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1514.55px] top-0 w-[261.453px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[41.5px] w-[1776px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1514.547px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Pelatihan Keperawatan Kardiovaskular Tingkat Dasar (PKKvTD)</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1514.55px] top-0 w-[261.453px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[82.5px] w-[1776px]" data-name="Table Row">
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1514.547px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Pelatihan Perawatan Intensif Pasca Bedah Jantung Dewasa</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1514.55px] top-0 w-[261.453px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[123.5px] w-[1776px]" data-name="Table Row">
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1514.547px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Program Perawatan Intensif Pasca Bedah Jantung Anak</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1514.55px] top-0 w-[261.453px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[164.5px] w-[1776px]" data-name="Table Row">
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1514.547px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Pelatihan Keperawatan Anestesi Kekhususan Kardiovaskular Bagi Perawat Anestesi Di Rumah Sakit</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1514.55px] top-0 w-[261.453px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[205.5px] w-[1776px]" data-name="Table Row">
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[247px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <TableRow />
        <TableRow1 />
        <TableRow2 />
        <TableRow3 />
        <TableRow4 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Table />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden className="absolute border-[#048a7f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[#048a7f] text-[20.8px] whitespace-nowrap">Pelatihan (Jangka Pendek)</p>
      </div>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1431.203px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Nama Pelatihan</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1431.2px] top-0 w-[344.797px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Link Dokumen</p>
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute bg-[#048a7f] h-[41px] left-[0.5px] top-[0.5px] w-[1776px]" data-name="Table Header">
      <HeaderCell2 />
      <HeaderCell3 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1431.203px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Pelatihan Advanced Cardiac Life Support (ACLS) untuk Perawat</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1431.2px] top-0 w-[344.797px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[41.5px] w-[1776px]" data-name="Table Row">
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1431.203px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Pelatihan Elektrokardiografi (EKG) untuk Perawat</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1431.2px] top-0 w-[344.797px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[82.5px] w-[1776px]" data-name="Table Row">
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1431.203px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Pelatihan Pemantauan Terapi Obat (PTO) bagi Apoteker di Rumah Sakit</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1431.2px] top-0 w-[344.797px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[123.5px] w-[1776px]" data-name="Table Row">
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1431.203px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Pelatihan Pediatric Advanced Life Support (PALS)</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1431.2px] top-0 w-[344.797px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[164.5px] w-[1776px]" data-name="Table Row">
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[206px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader1 />
        <TableRow5 />
        <TableRow6 />
        <TableRow7 />
        <TableRow8 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <Heading2 />
      <Table1 />
    </div>
  );
}

function SectionMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Section2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden className="absolute border-[#048a7f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[#048a7f] text-[20.8px] whitespace-nowrap">Peminatan Khusus</p>
      </div>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1371.125px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Nama Pelatihan</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1371.13px] top-0 w-[404.875px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Link Dokumen</p>
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="absolute bg-[#048a7f] h-[41px] left-[0.5px] top-[0.5px] w-[1776px]" data-name="Table Header">
      <HeaderCell4 />
      <HeaderCell5 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1371.125px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Program Peminatan Khusus Keperawatan Kardiovaskular</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1371.13px] top-0 w-[404.875px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[41.5px] w-[1776px]" data-name="Table Row">
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1371.125px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Program Peminatan Khusus Penunjang Kardiovaskular</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1371.13px] top-0 w-[404.875px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[82.5px] w-[1776px]" data-name="Table Row">
      <TableCell20 />
      <TableCell21 />
    </div>
  );
}

function Table2() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader2 />
        <TableRow9 />
        <TableRow10 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <Heading3 />
      <Table2 />
    </div>
  );
}

function SectionMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Section3 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden className="absolute border-[#048a7f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[#048a7f] text-[20.8px] whitespace-nowrap">Workshop</p>
      </div>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Nama Pelatihan</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Link Dokumen</p>
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="absolute bg-[#048a7f] h-[41px] left-[0.5px] top-[0.5px] w-[1776px]" data-name="Table Header">
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Elektrokardiografi (EKG) untuk Perawat</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[41.5px] w-[1776px]" data-name="Table Row">
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Continuous Renal Replacement Therapy (CRRT)</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[82.5px] w-[1776px]" data-name="Table Row">
      <TableCell24 />
      <TableCell25 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Intra Aortic Balloon Pump (IABP)</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow13() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[123.5px] w-[1776px]" data-name="Table Row">
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Ventilasi Mekanik</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow14() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[164.5px] w-[1776px]" data-name="Table Row">
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Hemodinamic Monitoring</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow15() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[205.5px] w-[1776px]" data-name="Table Row">
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Early Warning System (EWS) dan Sistem Code Blue</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow16() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[246.5px] w-[1776px]" data-name="Table Row">
      <TableCell32 />
      <TableCell33 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Extracorporeal Membrane Oxigenator (ECMO)</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow17() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[287.5px] w-[1776px]" data-name="Table Row">
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Pengenalan Keperawatan Kardiovaskular</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow18() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[328.5px] w-[1776px]" data-name="Table Row">
      <TableCell36 />
      <TableCell37 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Basic Cardiac Life Support (BCLS)</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow19() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[369.5px] w-[1776px]" data-name="Table Row">
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Heart Failure for Nurse</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow20() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[410.5px] w-[1776px]" data-name="Table Row">
      <TableCell40 />
      <TableCell41 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Preceptorship Center of Excellence (CoE) HeartPUMP / Heart Failure for Doctor</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow21() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[451.5px] w-[1776px]" data-name="Table Row">
      <TableCell42 />
      <TableCell43 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Pemeliharaan Peralatan Medik Kardiovaskular</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow22() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[492.5px] w-[1776px]" data-name="Table Row">
      <TableCell44 />
      <TableCell45 />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Sistem Kelistrikan dan HVAC Rumah Sakit</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow23() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[533.5px] w-[1776px]" data-name="Table Row">
      <TableCell46 />
      <TableCell47 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Dispensing Sediaan Obat Steril Bagi Tenaga Kesehatan Di Rumah Sakit</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow24() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[574.5px] w-[1776px]" data-name="Table Row">
      <TableCell48 />
      <TableCell49 />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.672px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Perencanaan dan Pengadaan Obat dan Barang Medis Habis Pakai (BMHP)</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.67px] top-0 w-[290.328px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow25() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[615.5px] w-[1776px]" data-name="Table Row">
      <TableCell50 />
      <TableCell51 />
    </div>
  );
}

function Table3() {
  return (
    <div className="h-[657px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader3 />
        <TableRow11 />
        <TableRow12 />
        <TableRow13 />
        <TableRow14 />
        <TableRow15 />
        <TableRow16 />
        <TableRow17 />
        <TableRow18 />
        <TableRow19 />
        <TableRow20 />
        <TableRow21 />
        <TableRow22 />
        <TableRow23 />
        <TableRow24 />
        <TableRow25 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <Heading4 />
      <Table3 />
    </div>
  );
}

function SectionMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Section4 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden className="absolute border-[#048a7f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[#048a7f] text-[20.8px] whitespace-nowrap">Workshop Kerjasama</p>
      </div>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.922px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Nama Pelatihan</p>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.92px] top-0 w-[290.078px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Link Dokumen</p>
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="absolute bg-[#048a7f] h-[41px] left-[0.5px] top-[0.5px] w-[1776px]" data-name="Table Header">
      <HeaderCell8 />
      <HeaderCell9 />
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.922px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Interpreting CTA Coronary</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.92px] top-0 w-[290.078px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow26() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[41.5px] w-[1776px]" data-name="Table Row">
      <TableCell52 />
      <TableCell53 />
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.922px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop CT Cardiac</p>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.92px] top-0 w-[290.078px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow27() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[82.5px] w-[1776px]" data-name="Table Row">
      <TableCell54 />
      <TableCell55 />
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.922px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Dose Optimization In Angiography</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.92px] top-0 w-[290.078px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow28() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[123.5px] w-[1776px]" data-name="Table Row">
      <TableCell56 />
      <TableCell57 />
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.922px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Basics of Interventional Imaging in the Hybrid Operating Room (HOR)</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.92px] top-0 w-[290.078px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow29() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[164.5px] w-[1776px]" data-name="Table Row">
      <TableCell58 />
      <TableCell59 />
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.922px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Hemodynamics in Cathlab</p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.92px] top-0 w-[290.078px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#048a7f] text-[16px] top-[6.5px] whitespace-nowrap">Lihat Dokumen</p>
    </div>
  );
}

function TableRow30() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[205.5px] w-[1776px]" data-name="Table Row">
      <TableCell60 />
      <TableCell61 />
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1485.922px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Workshop Myocardial Perfusion SPECT - Quantitative Analysis and Interpretation Cedars</p>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1485.92px] top-0 w-[290.078px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow31() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[246.5px] w-[1776px]" data-name="Table Row">
      <TableCell62 />
      <TableCell63 />
    </div>
  );
}

function Table4() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader4 />
        <TableRow26 />
        <TableRow27 />
        <TableRow28 />
        <TableRow29 />
        <TableRow30 />
        <TableRow31 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <Heading5 />
      <Table4 />
    </div>
  );
}

function SectionMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Section5 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden className="absolute border-[#048a7f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[#048a7f] text-[20.8px] whitespace-nowrap">Magang</p>
      </div>
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1360.688px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Nama Pelatihan</p>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1360.69px] top-0 w-[415.313px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Link Dokumen</p>
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="absolute bg-[#048a7f] h-[41px] left-[0.5px] top-[0.5px] w-[1776px]" data-name="Table Header">
      <HeaderCell10 />
      <HeaderCell11 />
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1360.688px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Magang Hands On Sterilisasi di Unit Sterilisasi Sentral</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1360.69px] top-0 w-[415.313px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[41.5px] w-[1776px]" data-name="Table Body">
      <TableCell64 />
      <TableCell65 />
    </div>
  );
}

function Table5() {
  return (
    <div className="h-[83px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader5 />
        <TableBody />
      </div>
    </div>
  );
}

function Section6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <Heading6 />
      <Table5 />
    </div>
  );
}

function SectionMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Section6 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden className="absolute border-[#048a7f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[#048a7f] text-[20.8px] whitespace-nowrap">Kunjungan / Studi Banding</p>
      </div>
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1052.609px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Nama Pelatihan</p>
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1052.61px] top-0 w-[723.391px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Bold',sans-serif] leading-[24px] left-[7.5px] not-italic text-[16px] text-white top-[6.5px] whitespace-nowrap">Link Dokumen</p>
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="absolute bg-[#048a7f] h-[41px] left-[0.5px] top-[0.5px] w-[1776px]" data-name="Table Header">
      <HeaderCell12 />
      <HeaderCell13 />
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1052.609px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Kunjungan Mahasiswa</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1052.61px] top-0 w-[723.391px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow32() {
  return (
    <div className="absolute bg-white h-[41px] left-[0.5px] top-[41.5px] w-[1776px]" data-name="Table Row">
      <TableCell66 />
      <TableCell67 />
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-0 top-0 w-[1052.609px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">Studi Banding</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute border border-[#ccc] border-solid h-[41px] left-[1052.61px] top-0 w-[723.391px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Regular',sans-serif] leading-[24px] left-[7.5px] not-italic text-[#7b7b7b] text-[16px] top-[6.5px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableRow33() {
  return (
    <div className="absolute bg-[#f0faff] h-[41px] left-[0.5px] top-[82.5px] w-[1776px]" data-name="Table Row">
      <TableCell68 />
      <TableCell69 />
    </div>
  );
}

function Table6() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader6 />
        <TableRow32 />
        <TableRow33 />
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <Heading7 />
      <Table6 />
    </div>
  );
}

function SectionMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[32px] relative size-full">
        <Section7 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph1 />
        <Section1 />
        <SectionMargin />
        <SectionMargin1 />
        <SectionMargin2 />
        <SectionMargin3 />
        <SectionMargin4 />
        <SectionMargin5 />
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
        <ImageJadwalDiklatKardiovaskular />
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

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Pusat Jantung Nasional Harapan Kita</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Jl. Letjen S. Parman Kav 87 Slipi Jakarta Barat 11420</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[343px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[28px]" data-name="Container">
      <Icon2 />
      <Container9 />
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

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Telepon</p>
      </div>
    </div>
  );
}

function Paragraph5() {
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

function Container11() {
  return (
    <div className="relative shrink-0 w-[291px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[80px]" data-name="Container">
      <Icon3 />
      <Container11 />
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

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['__Karla_4e868f:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">info@pjnhk.go.id</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[118px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[172px]" data-name="Container">
      <Icon4 />
      <Container13 />
    </div>
  );
}

function Navigation2() {
  return (
    <div className="absolute h-[216px] left-[689.84px] top-[40px] w-[330px]" data-name="Navigation">
      <p className="[word-break:break-word] absolute font-['__Karla_4e868f:Semi_Bold',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 tracking-[0.7px] uppercase whitespace-nowrap">Kontak Kami</p>
      <Container8 />
      <Container10 />
      <Container12 />
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

function Link18() {
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

function Link19() {
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

function Link20() {
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