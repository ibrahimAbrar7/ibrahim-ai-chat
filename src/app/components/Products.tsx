import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 bg-gray-800 overflow-hidden">
      {/* Corner Images */}
      <div className="absolute top-0 left-0 z-0 max-w-[120px] md:max-w-[200px]">
        <Image
          src="/bg-left.png"
          alt="Left Blocks"
          width={200}
          height={180}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute top-0 right-0 z-0 max-w-[120px] md:max-w-[200px]">
        <Image
          src="/bg-right.png"
          alt="Right Blocks"
          width={200}
          height={180}
          className="w-full h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold text-gray-200 mb-2">
          Products
        </h1>
        <p className=" text-gray-200 mb-10">List</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left text-gray-200">
          {/* Column 1 */}
          <ul className="space-y-2">
            <li>Adhesive Vinyl</li>
            <li>Aluminum Cards</li>
            <li>Aluminum Signs</li>
            <li>Badges</li>
            <li>Back Drop</li>
            <li>Backlit Posters</li>
            <li>Banners</li>
            <li>Banner Stand</li>
            <li>Binding</li>
            <li>Black & White Copying</li>
            <li>Blind Embossing</li>
            <li>Bookmarks</li>
            <li>Booklets</li>
            <li>Brochures</li>
            <li>Bumper Stickers</li>
            <li>Business Cards</li>
            <li>Business Forms</li>
            <li>Buttons</li>
            <li>CD Covers</li>
            <li>Calendars</li>
            <li>Car Magnetic</li>
            <li>Carbonless Form</li>
            <li>Canvas Printing</li>
          </ul>

          {/* Column 2 */}
          <ul className="space-y-2">
            <li>Custom Printing</li>
            <li>Cut Out Letters</li>
            <li>DVD Covers</li>
            <li>Decals Printing</li>
            <li>Die Cutting</li>
            <li>Digital Color Copying</li>
            <li>Digital Printing</li>
            <li>Door Hangers</li>
            <li>Duratrans Prints</li>
            <li>Easel</li>
            <li>Embossing</li>
            <li>Engraving</li>
            <li>Engraved Signs</li>
            <li>Envelops</li>
            <li>Fabric Banners</li>
            <li>Fine Arts Prints</li>
            <li>Finishing</li>
            <li>Flyers</li>
            <li>Floor Graphics</li>
            <li>Floor Clings</li>
            <li>Foil Stamping</li>
            <li>Foam Core Signs</li>
            <li>Fold Over Cards</li>
          </ul>

          {/* Column 3 */}
          <ul className="space-y-2">
            <li>Legal Copying</li>
            <li>Letterheads</li>
            <li>Mesh Banners</li>
            <li>Magnetic Cards</li>
            <li>Magnetic Signs</li>
            <li>Mounted Posters</li>
            <li>Mouse Pads</li>
            <li>Menus</li>
            <li>Newsletters</li>
            <li>Note Pads</li>
            <li>OCR Scanning</li>
            <li>Offset Printing</li>
            <li>Outdoor Banners</li>
            <li>Over Size Poster</li>
            <li>Packing Slips</li>
            <li>PVC Signs</li>
            <li>Pads</li>
            <li>Perforation</li>
            <li>Personal Stationery</li>
            <li>Photo Restoration</li>
            <li>Plastic Cards</li>
            <li>Plastic Signs</li>
            <li>Pop Up Banners Stand</li>
          </ul>

          {/* Column 4 */}
          <ul className="space-y-2">
            <li>Sales Sheets</li>
            <li>Same Day Business Cards</li>
            <li>Scanning</li>
            <li>Scoring</li>
            <li>Self-Adhesive Posters</li>
            <li>Sell Sheets</li>
            <li>Short Run Printing</li>
            <li>Sidewalk Signs</li>
            <li>Sign</li>
            <li>Silk Business Cards</li>
            <li>Static Cling</li>
            <li>Stationery</li>
            <li>Step and Repeat</li>
            <li>Stickers</li>
            <li>String Tags</li>
            <li>T-Shirts</li>
            <li>Tabs</li>
            <li>Table Tent Cards</li>
            <li>Tear Off Cards</li>
            <li>Thermography</li>
            <li>Tickets</li>
            <li>Vehicle Decals</li>
            <li>Vehicle Magnetics</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
