/* Redraw only pixels that changed to speed up PictureCanvas. Note drawPicture is used by save and ensure changes don't cause the original use to break or make a new version that has
a new name. Be aware that a <canvas> element's height/width properties getting changes makes it transparent. */
