'use client';
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css'; // react-phone-input-2 CSS dosyası
import PhoneInput from 'react-phone-input-2';


const PhoneForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        message: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (value: string) => {
        setFormData({ ...formData, phoneNumber: value });

        if (value.slice(value.indexOf(' ') + 1).startsWith('0')) {
            setError('Telefon numarası 0 ile başlayamaz.');
        } else {
            setError('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.phoneNumber || error) {
            alert('Lütfen formu göndermeden önce hataları düzeltin.');
            return;
        }

        alert('Form başarıyla gönderildi!');
        console.log(formData);
        // Backend entegrasyonu burada yapılabilir
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4"
        >
            <h3 className="text-left text-2xl">Form bırakın biz sizi arayalım.</h3>
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    Ad
                </label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                />
            </div>

            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Soyad
                </label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                />
            </div>

            <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Telefon Numarası
                </label>
                <PhoneInput
                    country={'tr'}
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                    inputProps={{
                        name: 'phoneNumber',
                        required: true,
                        autoFocus: true,
                    }}
                    containerClass="phone-input-container"
                    inputClass="phone-input"
                    buttonClass="phone-input-button"
                    dropdownClass="phone-input-dropdown"
                />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mesaj
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Herhangi bir işlem için fiyat bilgisi almak veya diğer konularda bilgi edinmek isterseniz, lütfen sorunuzu buraya yazınız."
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Gönder
            </button>
        </form>
    );
};

export default PhoneForm;
