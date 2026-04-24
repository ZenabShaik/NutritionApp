import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const dataFilePath = path.join(process.cwd(), "data", "visitors.json");
    
    // Read current count
    const fileContents = await fs.readFile(dataFilePath, "utf8");
    const data = JSON.parse(fileContents);
    
    return NextResponse.json({ count: data.count });
  } catch (error) {
    console.error("Error reading visitor count:", error);
    return NextResponse.json({ count: 10245, error: "Count disabled" });
  }
}

export async function POST() {
  try {
    const dataFilePath = path.join(process.cwd(), "data", "visitors.json");
    
    // Read
    const fileContents = await fs.readFile(dataFilePath, "utf8");
    const data = JSON.parse(fileContents);
    
    // Increment
    const newCount = data.count + 1;
    
    // Write
    await fs.writeFile(dataFilePath, JSON.stringify({ count: newCount }));
    
    return NextResponse.json({ success: true, count: newCount });
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return NextResponse.json({ success: false, count: 10245 });
  }
}
