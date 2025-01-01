'use client';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className=" pt-2 pb-[1px] px-4 rounded-lg shadow-lg container mx-auto">
            {/* Adres ve İletişim Bilgileri */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">İletişim Bilgileri</h2>
                <p className="text-gray-700">
                    <strong>Adres:</strong> Muradiye Mahallesi Nüzhetiye Cad, Deryadil Sokağı No:1, 34357 Beşiktaş
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Telefon:</strong>{' '}
                    <Link href="tel:+905327044102" className="text-blue-500 hover:underline">
                        +905327044102
                    </Link>
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Email:</strong>{' '}
                    <Link href="mailto:info@example.com" className="text-blue-500 hover:underline">
                        info@example.com
                    </Link>
                </p>
            </div>

            {/* Sosyal Medya */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-6">Bizi Sosyal Medyada Takip Edin</h3>
                <div className="flex space-x-4 text-blue-600 text-2xl">
                    <Link
                        href="https://www.instagram.com/avrupagozestetik?igsh=dGx4MHFxNnNnNG53"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-800"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href="https://youtube.com/@avrupagozestetik?si=RdbbSxMLAnFimD0n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-800"
                    >
                        <FaYoutube />
                    </Link>
                    <Link
                        href="https://www.facebook.com/share/B6sHYUjas2GE38yq/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-800"
                    >
                        <FaFacebook />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
