var page = new tabris.Page({
  title: "Corner Radius",
  topLevel: true,
  background: "#999999"
});

new tabris.Composite({
  width: 128, height: 128, centerX: 0, centerY: 0,
  background: "white",
  cornerRadius: 24,
  elevation: 8
}).appendTo(page);

page.open();
