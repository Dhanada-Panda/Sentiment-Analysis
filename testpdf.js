const mergepdfs = async (p1, p2) => {
  const PDFMerger = (await import('pdf-merger-js')).default;
  const merger = new PDFMerger();

  await merger.add(p1);
  await merger.add(p2);

  // Save the merged PDF in the 'public' directory
  await merger.save('./public/merged.pdf');
};

module.exports = { mergepdfs };
