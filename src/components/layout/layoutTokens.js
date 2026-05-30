/** Keep in sync with Navbar vertical padding (`py-3` + content ≈ 68px total height). */
export const NAVBAR_HEIGHT_PX = 68

export const navbarOffset = {
  overlap: '-mt-[68px]',
  clearHeader: 'pt-[68px]',
}

export const heroLayout = {
  sectionMinHeight: 'min-h-[70vh] lg:min-h-[100vh]',
  contentMinHeight: 'min-h-[calc(70vh-68px)] lg:min-h-[calc(100vh-68px)]',
  contentMaxWidth: 'max-w-[700px]',
  sectionPadding: 'pb-16 lg:pb-20',
}
