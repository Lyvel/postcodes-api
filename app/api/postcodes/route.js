import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { postcode } = body;
    const validatedPostcode = await validatePostcode(postcode);
    const formattedPostcode = await formatPostcode(postcode);

    if (validatedPostcode) {
      return NextResponse.json({
        validatedPostcode: validatedPostcode,
        formattedPostcode: formattedPostcode,
      });
    } else {
      return NextResponse.json({
        validatedPostcode: validatedPostcode,
      });
    }
  } catch (error) {}
}

function validatePostcode(postcode) {
  postcode = postcode.replace(" ", "");
  var regex =
    /^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/i;
  return regex.test(postcode);
}

function formatPostcode(postcode) {
  postcode = postcode.replace(" ", "");
  var formattedPostcode =
    postcode.slice(0, postcode.length - 3) +
    " " +
    postcode.slice(postcode.length - 3);
  return formattedPostcode.toUpperCase();
}
