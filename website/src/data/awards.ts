export interface AwardData {
  id: string;
  issuer: string;
  name: string;
  year: string;
  image: string;
}

export const awardsData: AwardData[] = [
  { id: '01', issuer: 'OFI (Olam Food Ingredients)', name: 'Distribution Award', year: '2026', image: '/media/awards/ofi-2026-distribution-award.jpg' },
  { id: '02', issuer: 'Euromega Atlantic Nigeria', name: 'Award of Recognition', year: '2025', image: '/media/awards/euromega-2025-recognition-award.jpg' },
  { id: '03', issuer: 'Kungiyar Hausa Ta B.U.K.', name: 'Shaidar Karramawa Ga Sani Isa Asia', year: '2024', image: '/media/awards/buk-hausa-group-honorary-ward.jpg' },
  { id: '04', issuer: 'Al-Quran School / Shaidar Girmamawa', name: 'Award of Appreciation', year: '2024', image: '/media/awards/alquran-school-appreciation-award.jpg' },
  { id: '05', issuer: 'Kannywood', name: 'Honorary Award', year: '2024', image: '/media/awards/kannywood honorary-awrd.jpg' },
  { id: '06', issuer: 'Singer Market Development Association', name: 'Award of Excellence', year: '2023', image: '/media/awards/smda-exellence-award.jpg' },
  { id: '07', issuer: 'Kano State Government', name: 'Award of Recognition - Consumer Ambassador', year: '2023', image: '/media/awards/kano-goverbment-recognition-award.jpg' },
  { id: '08', issuer: 'ADKF Alherin Dadinkowa Foundation', name: 'Award of Excellence', year: '2022', image: '/media/awards/adk-exellence-award.jpg' },
  { id: '09', issuer: 'Mamuda Group', name: 'Best Performing Distributor', year: '2022', image: '/media/awards/mamuda-2021-2022-best-performing-distributor.jpg' },
  { id: '10', issuer: 'UMD (United Marketing Distributors)', name: 'Appreciation and Mentorship Award', year: '2022', image: '/media/awards/umd-appreciation-and-mentorship-award.jpg' },
  { id: '11', issuer: 'Euromega Atlantic Nigeria', name: 'Award of Excellence - Top GoodMama KW', year: '2021', image: '/media/awards/euro-mega-2021-execellence-award.jpg' },
  { id: '12', issuer: 'So Klin / PZ Cussons', name: 'No.1 Distributor Award', year: '2013', image: '/media/awards/soklin2013-recognition-award.jpg' },
];