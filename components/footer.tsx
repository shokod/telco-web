import React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { FaFacebook, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbLocationPin } from "react-icons/tb";
import { LuMail } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <footer className="border-t bg-muted/40">
        <div className="container mx-auto px-4 py-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                <Logo size="md" className="mb-4" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Proudly South African company providing premium safety equipment
                since 2013.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">Twitter</span>
                  <FaXTwitter className="text-blue-900 w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="text-blue-900 w-5 h-5" />
                </Link>

                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="text-blue-900 w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Fall Arrest Harnesses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Rope Access Equipment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Safety Harnesses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Vertical & Horizontal Lifelines
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Safety Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Equipment Inspection
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Skills Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                <FiPhone className="text-blue-900 w-5 h-5"/>
                  <span className="text-sm text-muted-foreground">
                    (+27) 123-4567
                  </span>
                </li>
                <li className="flex items-start gap-2">
                <LuMail  className="text-blue-900 w-5 h-5" />
                  <span className="text-sm text-muted-foreground">
                    info@tisglobal.co.za
                  </span>
                </li>
                <li className="flex items-start gap-2">
                <TbLocationPin className="text-blue-900 w-5 h-5" />
                  <span className="text-sm text-muted-foreground">
                    123 Safety Street
                    <br />
                    Johannesburg, South Africa
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TIS GLOBAL (Pty) Ltd. All rights
              reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
