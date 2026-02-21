/*
 * Axion Scientific — Data Constants
 * Design: "Cold Lab" dark technical interface
 * All division data, company info, and RUO disclaimer content
 */

export const COMPANY = {
  legalName: "AXION SCIENTIFIC LTD",
  number: "16926218",
  registeredOffice: "128 City Road, London, United Kingdom, EC1V 2NX",
  companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/16926218",
  officersUrl: "https://find-and-update.company-information.service.gov.uk/company/16926218/officers",
  filingUrl: "https://find-and-update.company-information.service.gov.uk/company/16926218/filing-history",
};

export interface BulkService {
  name: string;
  price: string;
  description: string;
}

export interface BulkOrder {
  text: string;
  showPrices: boolean;
  actions: [string, string][];
  services: BulkService[];
  fineprint: string;
}

export interface Division {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  subtitle: string;
  context: string;
  kv: [string, string][];
  notes: string;
  image: string;
  ruo?: boolean;
  bulk?: BulkOrder;
}

export const IMAGES = {
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/lngtlYyBLegqC64sMw0woP/sandbox/CAC4MRwItDBAgShven3iIg-img-1_1770832646000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbG5ndGxZeUJMZWdxQzY0c013MHdvUC9zYW5kYm94L0NBQzRNUndJdERCQWdTaHZlbjNpSWctaW1nLTFfMTc3MDgzMjY0NjAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dz6hfg-4l84yjfqqRbMgM8ZuOBFo0VD16gOQg8-Jpyt66wjOjyZLM7hOWh~HM2rYk3SvPE0QgBfpq9WPXM-c5zlZlwJDbzm5eAWwH4Qb3ZjOTxVG6ZMFHuiQbw4m16l8aqQs-o4jBlqqw810bTB9oLVH3miNB0qfgXC8~YCUZU1u1cVED7K49wEuhI6u~-RqQg~jRlV~ZPVkCiOgYdLnB4y~LhmOTPN9J2MBMSrIeENq1qb5xtYc2jobmSsyL-qw7JKgeEcY2D97vKKQaRLRjJzK9-hfnA19D8J8I-4m~zLXZ-y9TQjmbB91CUFUMeP5cJsx4dBEJvHSwgCD4tvsmw__",
  peptideVials: "https://private-us-east-1.manuscdn.com/sessionFile/lngtlYyBLegqC64sMw0woP/sandbox/CAC4MRwItDBAgShven3iIg-img-2_1770832638000_na1fn_cGVwdGlkZS12aWFscw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbG5ndGxZeUJMZWdxQzY0c013MHdvUC9zYW5kYm94L0NBQzRNUndJdERCQWdTaHZlbjNpSWctaW1nLTJfMTc3MDgzMjYzODAwMF9uYTFmbl9jR1Z3ZEdsa1pTMTJhV0ZzY3cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qUPknwpzdy8WkMOxJxVF89KWARQJHwdBJ4io43ZeC1LmUWudUM7VJEYQ06yP8pAjqOPE3t6lEtXC7ks0Gx37y3NO8UUo2FqjaVgmxG8oq4EUhK471H~3m4ouum8p4gVIrML89W~K9kGAwPCaMEHMdZ0Ha3gJpwkL46sRjLsghkdXF~QsZalW~9qVk5mPGFCNfJfv~rxN2H7i-b8jC4QllMy2CaZF5CTV0fAd2cXff~f~LY1wlf9vqAhO5sArsqzCjLPa9GPKyns-3SiyYcN9N8qB1OFUdImUToOPZPuxXt4789H-ihncuPGwGODiKf5feK8Yjsvq9Kyipwflm1mtNA__",
  analyticalLab: "https://private-us-east-1.manuscdn.com/sessionFile/lngtlYyBLegqC64sMw0woP/sandbox/CAC4MRwItDBAgShven3iIg-img-3_1770832635000_na1fn_YW5hbHl0aWNhbC1sYWI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbG5ndGxZeUJMZWdxQzY0c013MHdvUC9zYW5kYm94L0NBQzRNUndJdERCQWdTaHZlbjNpSWctaW1nLTNfMTc3MDgzMjYzNTAwMF9uYTFmbl9ZVzVoYkhsMGFXTmhiQzFzWVdJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Os4gJ5wXUrP3LTTYOjOy~JDAuK4XgMvucMWNLj-fE63fLhP2DEe1kvllRTwQsxH8Xe-YJGBN2kjUGXCefy1oI5JrnRe7F851OGZT7DXpOaLHxdB-MX~~mFP7hVGE2rAG6kt187w3q~~UobkYer7XlVq--DnVtQHYv1d4rDiEUCdTvol5xiuXY2vBLRev1wrPtBbxzi21-FIYPC242Mg2eAldgCU5n4Pq4CakrIvuANvXNg8-vEsv97qmSEzkzFBhQqqK7GmQ~axHOofAtZefcc-g4SCfORORFUL13zXwEuXQUErGcmpOU24tDNLrbUGZ03qu6sr3g1g2m5M6IwPDJg__",
  filtrationLab: "https://private-us-east-1.manuscdn.com/sessionFile/lngtlYyBLegqC64sMw0woP/sandbox/CAC4MRwItDBAgShven3iIg-img-4_1770832645000_na1fn_ZmlsdHJhdGlvbi1sYWI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbG5ndGxZeUJMZWdxQzY0c013MHdvUC9zYW5kYm94L0NBQzRNUndJdERCQWdTaHZlbjNpSWctaW1nLTRfMTc3MDgzMjY0NTAwMF9uYTFmbl9abWxzZEhKaGRHbHZiaTFzWVdJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cqHNxrASxSy1~rtI1mYpSaDy4UjILli-~ZlSA1CcmNSfkuLkOPTLWSSj6JVgUZmYqEAHASql9NF8-1rAmZ0TBK8pVEYmb3cCXVoTDS3RIZQPMDDe7Zzqj9zFUjj9nLS9KZSKNOd5kAogDODWx04J7imG53jPDgKCJ0oWxjMgVDQ7pdfudmIXZo6VfgZMLe5aQrs1vHAcXm-wRcf2-whCn-JPenIZMiGVDFfIYogvRQTTdsZDHO5E527xZ~Gjl8q0y0iGw~TTz9pQrn9Yb0OtKhSd-deKHne6PhpZ~8iqdPafERl9HkhdLu7gpC-MyfrUc5JRS~mKWnXf0cJC6~V1Hg__",
  abstractMolecules: "https://private-us-east-1.manuscdn.com/sessionFile/lngtlYyBLegqC64sMw0woP/sandbox/CAC4MRwItDBAgShven3iIg-img-5_1770832638000_na1fn_YWJzdHJhY3QtbW9sZWN1bGVz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbG5ndGxZeUJMZWdxQzY0c013MHdvUC9zYW5kYm94L0NBQzRNUndJdERCQWdTaHZlbjNpSWctaW1nLTVfMTc3MDgzMjYzODAwMF9uYTFmbl9ZV0p6ZEhKaFkzUXRiVzlzWldOMWJHVnouanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=A707-898vBSKOBCsWwB0U7yChRJKaSJAjLUfUR9Rgj9TFWqu2b7vD1pYly9D6y01K~1e8hGlJ1Su5T132~EDgvIbttLQe1g1weo2lJRhqllfIW-a-2GHh78ZNtWubV5F~Q3b4PpYjfnvPp2TyhZ9hu5M2sDwMumdbwyTItGyOiNPGFj4N9XBn9WUCreWzKLeGL7MZtl2lbAF1CLgybvnkk5~y1I2gq-nN9aHFCgkjtD08yOP2hUjIEOGYVZL0QK6VGE~RlT~925tSgrLfScDl2UbVaqMfpYUogAGFRr0YXe82i4SJ1RIGZoqZCNEXJmpao8UG8VSAGfhmJ~Or8cAkg__",
};

export const DIVISIONS: Division[] = [
  {
    slug: "chemical-analysis",
    name: "Chemical Analysis",
    category: "Analytical services",
    blurb: "We support testing of ordered reagents using the analytical methods listed on Axion Peptides. Additional testing is available on request (enquire).",
    subtitle: "Division \u2022 Chemical Analysis",
    context:
      "Chemical Analysis supports projects that require clear analytical outputs\u2014defined scope, documented methods, and repeatable reporting.",
    kv: [
      ["Typical outputs", "Reports and documentation"],
      ["Capabilities", "Project-specific capability list"],
      ["Turnaround", "Quoted per project"],
      ["Sample intake", "Chain-of-custody and labeling"],
      ["Compliance", "Handling and SDS requirements"],
    ],
    notes: "Work is quoted and documented per project scope.",
    image: IMAGES.analyticalLab,
  },
  {
    slug: "axion-peptides",
    name: "Axion Peptides",
    category: "Research reagents",
    blurb: "Amino acid reagents with batch documentation and a structured ordering workflow. For Research Use Only.",
    subtitle: "Division \u2022 Axion Peptides",
    context:
      "Axion Peptides supplies research-use amino acid reagents with batch documentation. All peptide products are provided exclusively for research use only (RUO). They are not intended for human or veterinary diagnostic or therapeutic use.",
    kv: [
      [
        "Please provide:",
        "• Requested peptide sequences from N\' to C\'. Single and three-letter amino acid codes are supported.\n• Quantity per aliquot and aliquot quantity.\n• Any modifications if applicable.",
      ],
      ["Documentation", "COA / lot documentation (where applicable)"],
      ["Bulk orders", "Enquire for bulk orders"],
      ["Price list", "Enquire for price list"],
      ["Jurisdictions", "Availability varies by region"],
      ["Support", "Email support"],
      ["Classification", "Research Use Only (RUO)"],
    ],
    notes:
      "Availability and documentation vary by lot and jurisdiction. Purchasers assume responsibility for compliance with all applicable local, national, and international regulations governing the purchase, handling, storage, and use of research reagents.",
    image: IMAGES.peptideVials,
    ruo: true,
    bulk: {
      text: "For bulk supply, request a quote and select any optional analysis add-ons required for your order.",
      showPrices: false,
      actions: [
        [
          "Enquire for bulk orders",
          "mailto:comms@axionscientific.com?subject=Bulk%20order%20enquiry%20%E2%80%94%20Axion%20Peptides",
        ],
        [
          "Request price list",
          "mailto:comms@axionscientific.com?subject=Price%20list%20request%20%E2%80%94%20Axion%20Peptides",
        ],
      ],
      services: [
        { name: "TFA analysis", price: "(+$240.00)", description: "Trifluoroacetic acid content reporting (where applicable)." },
        { name: "Raw data", price: "(+$20.00)", description: "Raw instrument data packaged with the report (where applicable)." },
        { name: "Variance testing", price: "(+$60.00)", description: "Lot-to-lot variance testing to an agreed scope." },
        { name: "pH measurement", price: "(+$30.00)", description: "pH measurement for applicable formats." },
        { name: "Endotoxin analysis", price: "(+$120.00)", description: "Endotoxin screening (where applicable)." },
        { name: "LCMS screening for sequence contamination", price: "(+$170.00)", description: "LC-MS screen for unexpected signals / cross-contamination (where applicable)." },
        { name: "Sterility testing", price: "(+$240.00)", description: "Sterility testing (where applicable)." },
        { name: "Heavy metals analysis", price: "(+$90.00)", description: "Heavy metals analysis (where applicable)." },
      ],
      fineprint: "Add-on availability, turnaround, and final pricing are confirmed at quotation.",
    },
  },
  {
    slug: "filtration",
    name: "Filtration",
    category: "Lab consumables",
    blurb: "Supply of USP vials and laboratory filters, with straightforward ordering and documentation on request.",
    subtitle: "Division \u2022 Filtration",
    context:
      "Filtration covers consumables\u2014USP vials and laboratory filters\u2014with manufacturer documentation where available.",
    kv: [
      ["Products", "USP vials and laboratory filters"],
      ["Documentation", "Manufacturer documentation on request"],
      ["Lead time", "Quoted per order"],
      ["Availability", "Stock / backorder varies by line"],
      ["Support", "Sourcing and order support"],
    ],
    notes:
      "If you\u2019re requesting a specific brand or part number, include it in your enquiry for the fastest turnaround.",
    image: IMAGES.filtrationLab,
  },
];

export const RUO_DISCLAIMER = {
  short: "For Research Use Only. Not for human consumption.",
  medium:
    "All peptide products supplied by Axion Peptides are for Research Use Only (RUO). They are not intended for human or veterinary diagnostic or therapeutic use, and are not for human consumption.",
  full: `All peptide products supplied by Axion Peptides, a division of Axion Scientific Ltd, are designated as Research Use Only (RUO).

These products are not intended for:
\u2022 Human or animal diagnostic use
\u2022 Therapeutic or clinical use
\u2022 Human consumption or ingestion
\u2022 Use as food, drug, cosmetic, or household chemical

Purchasers and end-users are solely responsible for ensuring that the purchase, handling, storage, and use of all products comply with all applicable local, national, and international laws and regulations.

Axion Scientific Ltd makes no representations or warranties regarding the suitability of these products for any purpose beyond research. By purchasing or using these products, the buyer acknowledges and agrees to these terms.

Products are supplied with available documentation (e.g., Certificate of Analysis) where applicable. Specifications, availability, and documentation may vary by lot and jurisdiction.`,
};

export const SITE_NOTICE = {
  general: "Information on this website is provided for general informational purposes only. Offerings, specifications, and documentation are provided contractually and may vary by jurisdiction.",
  ruo: RUO_DISCLAIMER.full,
  liability: "Axion Scientific Ltd accepts no liability for any loss, damage, or injury arising from the misuse of products or information provided on this website. All products are supplied subject to Axion Scientific Ltd\u2019s terms and conditions of sale.",
};

export const NAV_LINKS = [
  { label: "Divisions", href: "/#divisions" },
  { label: "Governance", href: "/#governance" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/contact" },
];

export const OPERATING_PRINCIPLES = [
  { label: "Documentation", value: "Clear deliverables" },
  { label: "Consistency", value: "Repeatable workflows" },
  { label: "Traceability", value: "Defined records" },
  { label: "Responsiveness", value: "Fast comms" },
];
